import React, { useState } from 'react'
import logo from '../../../images/header/logo.svg'
import cart from '../../../images/header/cart.svg'
import basket from '../../../images/header/basket.svg'
import styles from './Header.module.css'
import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { basketSelector } from '../../../store/slices/BasketSlices'

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

    const { basket: basketProducts } = useSelector(basketSelector)

    return (
        <header>
            <div className={styles.headContainer}>

                <div className={styles.container_logoCatalog}>
                    <NavLink className={({ isActive }) => isActive ?
                        `${styles.link_logo} ${styles.active}`
                        : styles.link_logo
                    } to='/'>
                        <img className={styles.icon_logo} src={logo} alt="Logo" />
                    </NavLink>
                    <NavLink to="/categories" className={({ isActive }) => isActive ?
                        `${styles.btn_catalog} ${styles.active}`
                        : styles.btn_catalog
                    } >Catalog</NavLink>
                </div>
                <div className={styles.container_linksCart}>
                    <div className={styles.container_links}>

                        {links.map(({ label, link }) => (
                            <NavLink key={link} className={({ isActive }) => isActive ?
                                `${styles.link} ${styles.active}`
                                : styles.link
                            } to={link}>{label}</NavLink>
                        ))}

                    </div>
                    <NavLink className={({ isActive }) => isActive ?
                        `${styles.basket} ${styles.active}`
                        : styles.basket
                    } to={"/cart"}>
                        <img className={styles.icon_basket} src={basket} alt="Cart" />
                        <p className={styles.number_of_products}>{basketProducts.length}</p>
                    </NavLink>


                </div>

            </div>
        </header >
    )
}
