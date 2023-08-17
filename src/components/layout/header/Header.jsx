import React from 'react'
import logo from '../../../images/header/logo.svg'
import cart from '../../../images/header/cart.svg'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'

const links = [
    {
        label: 'Main Page',
        link: ''
    },
    {
        label: 'All products',
        link: '/allProducts'
    },
    {
        label: 'All sales',
        link: '/allSales'
    }
]
export default function Header() {
    return (
        <header>
            <div className={styles.headContainer}>

                <div className={styles.container_logoCatalog}>
                    <Link to="">
                        <img className={styles.icon_logo} src={logo} alt="Logo" />
                    </Link>
                    <Link to="/categories" className={styles.btn_catalog} >Catalog</Link>
                </div>
                <div className={styles.container_linksCart}>
                    <div className={styles.container_links}>
                        {links.map(({ label, link }) => (
                            <Link key={link} className={styles.link} to={link}>{label}</Link>
                        ))}
                    </div>
                    <Link to={"/cart"}>
                        <img className={styles.icon_cart} src={cart} alt="Cart" />
                    </Link>

                </div>

            </div>
        </header>
    )
}
