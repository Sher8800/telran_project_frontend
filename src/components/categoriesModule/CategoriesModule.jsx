import React, { useEffect, useState } from 'react'
import styles from './categories.module.css'
import { API_URL } from '../../globalVariables/GlobalVariables'
import { NavLink } from 'react-router-dom'
import { ProductService } from '../../services/product.service'

export default function CategoriesModule() {
  const URL = `${API_URL}categories/all`


  const [allCategories, setAllCategories] = useState([])

  useEffect(() => {
    const getCategories = async () => {
      const products = await ProductService.getCategories()
      setAllCategories(products)
    }
    getCategories()
  }, [])

  return (
    <>
      <div className={styles.cotainer_categories}>
        <p className={styles.heading_text}>Categories</p>
        <div className={styles.categories}>
          {allCategories.map((product) => {
            return <NavLink to={'/productsInCategories'} state={{ id: product.id, title: product.title }} key={product.id} className={styles.container_img}>
              <img className={styles.img_categories} src={API_URL + product.image} alt="product" />
              <p className={styles.text}>{product.title}</p>
            </NavLink>
          })}
        </div>
      </div>
    </>
  )
}



