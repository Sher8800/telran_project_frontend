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

              <p className={styles.new_price}>199<span className={styles.dollar_sign}>$</span></p>
              <p className={styles.old_price}>250$</p>
              <p className={styles.discount}>-7<span className={styles.percent}>%</span></p>
            </div>

            <button className={styles.btn}>To cart</button>

          </div>

          <div className={styles.border_dashed}></div>

          <div className={styles.description_product}>
            <p className={styles.text_description}>Description</p>
            <div className={styles.description}><p>Size, cm - 45x33</p>
              <p>Material: frost-resistant polymer, reinforced by a steel galvanized bar, riveted to the blade, aluminum handle with a V-shaped handle.</p></div>
          </div>

        </div>
      </div>
    </div>
  )
}
