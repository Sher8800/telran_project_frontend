import React, { useEffect, useState } from 'react'
import styles from './Categories.module.css'
import { API_URL } from '../../config/api'
import { NavLink } from 'react-router-dom'
import { ProductService } from '../../services/product.service'

export default function CategoriesModule() {

  const [allCategories, setAllCategories] = useState([])

  useEffect(() => {
    const getCategories = async () => {
      const products = await ProductService.getCategories()
      setAllCategories(products)
    }
    getCategories()
  }, [])

  return (
    <div className={styles.cotainer}>
      <p className={styles.page_title}>Categories</p>
      <div className={styles.container_categories}>
        {allCategories.map((cotegorie) => {
          return <NavLink to={'/productsInCategories'} state={{ id: cotegorie.id, title: cotegorie.title }} key={cotegorie.id} className={styles.container_categorie}>
            <img className={styles.img_categorie} src={API_URL + cotegorie.image} alt="product" />
            <p className={styles.cotegorie_title}>{cotegorie.title}</p>
          </NavLink>
        })}
      </div>
    </div>
  )
}



