import React from 'react'
import logo from '../../assets/header/logo.png'
import cart from '../../assets/header/shopping-bag.png'
import styles from './header.module.css'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <div className={styles.headContainer}>

                <div className={styles.container_logoCatalog}>
                    <img className={styles.icon_logo} src={logo} alt="Logo" />
                    <div className={styles.btn_catalog}>Catalog</div>
                </div>
                <div className={styles.container_linksCart}>
                    <div className={styles.container_links}>
                        <Link className={styles.link_main} to="">Main Page</Link>
                        <Link className={styles.link_products} to="/allProducts">All products</Link>
                        <Link className={styles.link_sales} to="/allSales">All sales</Link>
                    </div>
                    <img className={styles.icon_cart} src={cart} alt="Cart" />

                </div>

            </div>
        </header>
    )
}
