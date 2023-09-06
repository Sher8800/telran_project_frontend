import React from 'react'
import styles from '../stylesModule/ProductData.module.css'

export default function ProductData({ product }) {
  return (
    <div className={styles.product_description}>
      <div className={styles.container_price}>

        {product.discont_price ?
          <>
            <p className={styles.discount_price}>{product.discont_price + '$'}</p>
            <p className={styles.price}>{product.price + '$'}</p>
            <p className={styles.discount}>{`- ${Math.ceil(100 - (product.discont_price / (product.price / 100)))} %`}</p>
          </>
          :
          <p className={styles.discount_price}>{product.price + '$'}</p>
        }

      </div>
      <p className={styles.product_title}>{product.title}</p>
    </div>
  )
}

