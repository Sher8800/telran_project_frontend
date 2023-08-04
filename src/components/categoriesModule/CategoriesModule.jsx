import React, { useState } from 'react'
import styles from './categories.module.css'
import { API_URL } from '../../globalVariables/GlobalVariables'
import { Link } from 'react-router-dom'

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
            return <div key={product.id} className={styles.container_img}>
              <div className={styles.img_text}>
                <div> {/* По сути это не нужный див */}
                  <img className={styles.img_fertilizer} src={API_URL + product.image} alt="" />
                </div>
                <p className={styles.text}>{product.title}</p>
              </div>
            </div>
          })}
        </div>
      </div>
    </>
  )
}



