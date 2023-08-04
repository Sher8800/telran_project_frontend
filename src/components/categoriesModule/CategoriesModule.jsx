import React, { useState } from 'react'
import styles from './categories.module.css'
import { API_URL } from '../../globalVariables/GlobalVariables'
import { NavLink } from 'react-router-dom'

export default function CategoriesModule() {
  const URL = `${API_URL}categories/all`


  const [allCategories, setAllCategories] = useState([])

  fetch(URL)
    .then(response => response.json())
    .then(products => setAllCategories([...products]));

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



