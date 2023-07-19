import React from 'react'
import styles from './catalog.module.css'
import { Link } from 'react-router-dom'

export default function Catalog() {
  return (
    <div className={styles.container}>
      <div className={styles.container_text_btn}>
        <p className={styles.catalog}>Catalog</p>
        <div className={styles.btn}>
          <Link className={styles.btn_item_text} to="/categories">All categories</Link>
        </div>
      </div>
      <div className={styles.container_img}>
        <div className={styles.img_text}>
          <div className={styles.img_fertilizer}></div>
          <p className={styles.text}>Fertilizer</p>
        </div>
        <div className={styles.img_text}>
          <div className={styles.img_protective_products}></div>
          <p className={styles.text_long}>Protective products and septic tanks</p>
        </div>
        <div className={styles.img_text}>
          <div className={styles.img_planting_material}></div>
          <p className={styles.text}>Planting material</p>
        </div>
        <div className={styles.img_text}>
          <div className={styles.img_inventory}></div>
          <p className={styles.text}>Tools and Inventory</p>
        </div>
      </div>
    </div>
  )
}
