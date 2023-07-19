import React from 'react'
import styles from './discount.module.css'

export default function Discount() {
  return (
    <div className={styles.container}>
      <div className={styles.img}></div>
      <div className={styles.container_discount}>
        <div className={styles.text_discount}>
          <p className={styles.discount}>5% off </p>
          <p className={styles.text}>on the first order</p>
        </div>
        <div className={styles.form_discount}>
          <input className={styles.phone} type="text" placeholder='+49' />
          <button className={styles.btn}>Get a discount</button>
        </div>
      </div>
    </div>
  )
}
