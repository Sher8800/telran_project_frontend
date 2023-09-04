import React from 'react'
import logo from '../../../images/header/logo.svg'
import basket from '../../../images/header/basket.svg'
import styles from './Header.module.css'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { basketSelector } from '../../../store/slices/BasketSlices'
import { ReactComponent as BurgerIcon } from '../../../images/header/burger.svg'
import useWindowSize from '../../../hooks/useWindowSize'


const links = [
    {
        label: 'Main Page',
        link: '',
    },
    {
        label: 'All products',
        link: '/allProducts',
    },
    {
        label: 'All sales',
        link: '/allSales',
    }
]

export default function Header() {

    const { width } = useWindowSize();

    const { basket: basketProducts } = useSelector(basketSelector);

    return (
        <header className={styles.headContainer}>

            <div className={styles.container_logoCatalog}>
                <NavLink className={({ isActive }) => isActive
                    ? `${styles.link_logo} ${styles.active}`
                    : styles.link_logo} to='/'>
                    <img className={styles.icon_logo} src={logo} alt="Logo" />
                </NavLink>
                <NavLink to="/categories" className={({ isActive }) => isActive
                    ? `${styles.btn_catalog} ${styles.active}`
                    : styles.btn_catalog
                } >Catalog</NavLink>
            </div>

            <div className={styles.container_linksCart}>

                <div className={styles.container_links}>
                    {width > 710 ? links.map(({ label, link }) => (
                        <NavLink key={link} className={({ isActive }) => isActive
                            ? `${styles.link} ${styles.active}`
                            : styles.link} to={link}>{label}</NavLink>
                    ))
                        : <BurgerIcon />
                    }
                </div>

                <NavLink className={({ isActive }) => isActive
                    ? `${styles.basket} ${styles.active}`
                    : styles.basket
                } to={"/cart"}>
                    <img className={styles.icon_basket} src={basket} alt="Cart" />
                    <p className={styles.number_of_products}>{basketProducts.length}</p>
                </NavLink>

            </div>

        </header >
    )
}
