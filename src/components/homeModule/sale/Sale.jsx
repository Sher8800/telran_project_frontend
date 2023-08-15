import React from 'react'
import styles from './Sale.module.css'


export default function Sale() {
  return (
    <div className={styles.container}>

      <p className={styles.sale}>Sale</p>

      <div className={styles.container_products}>

        <div className={styles.container_product}>
          <div className={styles.img_bridge}></div>
          <div className={styles.product_description}>
            <div className={styles.container_price}>
              <p className={styles.new_price}>500$</p>
              <p className={styles.old_price}>1000$</p>
              <p className={styles.discount}>-7%</p>
            </div>
            <p className={styles.name_product}>Decorative forged bridge</p>
          </div>
        </div>

        <div className={styles.container_product}>
          <div className={styles.img_flower_basket}></div>
          <div className={styles.product_description}>
            <div className={styles.container_price}>
              <p className={styles.new_price}>100$</p>
              <p className={styles.old_price}>150$</p>
              <p className={styles.discount}>-7%</p>
            </div>
            <p className={styles.name_product}>Flower basket</p>
          </div>
        </div>

        <div className={styles.container_product}>
          <div className={styles.img_aquarium_lock}></div>
          <div className={styles.product_description}>
            <div className={styles.container_price}>
              <p className={styles.new_price}>150$</p>
              <p className={styles.old_price}>200$</p>
              <p className={styles.discount}>-7%</p>
            </div>
            <p className={styles.name_product}>Aquarium lock</p>
          </div>
        </div>

      </div>
    </div>
  )
}
