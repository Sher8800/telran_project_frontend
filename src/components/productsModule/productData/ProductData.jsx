import React from 'react'
import styles from '../stylesModule/ProductData.module.css'

export default function ProductData({ product }) {
  return (
    <div className={styles.product_description}>
      <div className={styles.container_price}>
        <p className={styles.new_price}>{product.price + '$'}</p>
        {product.discont_price ?
          <>
            <p className={styles.old_price}>{Math.ceil(product.price / (1 - (product.discont_price / 100))) + '$'}</p>
            <p className={styles.discount}>{'-' + product.discont_price + '%'}</p>
          </>
          : ''
        }
      </div>
      <p className={styles.product_title}>{product.title}</p>
    </div>
  )
}
