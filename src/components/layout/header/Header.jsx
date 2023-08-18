import React, { useState } from 'react'
import logo from '../../../images/header/logo.svg'
import cart from '../../../images/header/cart.svg'
import styles from './Header.module.css'
import { Link, NavLink } from 'react-router-dom'

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

    return (
        <header>
            <div className={styles.headContainer}>

                <div className={styles.container_logoCatalog}>
                    <NavLink to=''>
                        <img className={styles.icon_logo} src={logo} alt="Logo" />
                    </NavLink>
                    <NavLink to="/categories" className={styles.btn_catalog} >Catalog</NavLink>
                </div>
                <div className={styles.container_linksCart}>
                    <div className={styles.container_links}>
                        {links.map(({ label, link }) => (
                            <NavLink key={link} className={({ isActive }) =>
                                isActive ? `${styles.link} ${styles.active}` : styles.link
                            } to={link}>{label}</NavLink>
                        ))}
                    </div>
                    <NavLink to={"/cart"}>
                        <img className={styles.icon_cart} src={cart} alt="Cart" />
                    </NavLink>

                </div>

            </div>
        </header >
    )
}
