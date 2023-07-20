import React from 'react'
import styles from './productsModule.module.css'

export default function ProductsModule() {
  return (
    <div className={styles.products_container}>
      <p className={styles.rubric}>Spade</p>
      <div className={styles.product_container}>
        <div className={styles.img}></div>
        <div className={styles.description_container}>

          <div className={styles.price_container}>

            <div className={styles.container_price}>

              <p className={styles.new_price}>199$</p>
              <p className={styles.old_price}>250$</p>
              <p className={styles.discount}>-7%</p>
            </div>

            <button className={styles.btn}></button>

          </div>

          <div className={styles.description_product}>
            <p className={styles.text_description}></p>
            <p className={styles.description}></p>
          </div>

        </div>
      </div>
    </div>
  )
}
