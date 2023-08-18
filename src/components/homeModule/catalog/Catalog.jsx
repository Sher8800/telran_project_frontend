import React, { useState } from 'react'
import styles from './Catalog.module.css'
import { API_URL } from '../../../config/api'
import { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ProductService } from '../../../services/product.service'

export default function Catalog() {

  const [allCotegories, setAllCotegories] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      const products = await ProductService.getCategories()
      setAllCotegories(products)
    }
    getProducts()
  }, [])

  return (
    <div className={styles.container}>

      <div className={styles.container_text_btn}>
        <p className={styles.page_title}>Catalog</p>
        <Link className={styles.btn} to="/categories">
          <p className={styles.btn_item_text} >All categories</p>
        </Link>
      </div>

      <div className={styles.container_categories}>

        {allCotegories.slice(0, 4).map((cotegorie) => (
          <NavLink key={cotegorie.id} to={'/productsInCategories'} state={{ id: cotegorie.id, title: cotegorie.title }} className={styles.container_categorie}>
            <img className={styles.img_cotegorie} src={API_URL + cotegorie.image} alt="cotegorie" />
            <p className={styles.cotegorie_title}>{cotegorie.title}</p>
          </NavLink>
        ))}

      </div>
    </div >
  )
}
