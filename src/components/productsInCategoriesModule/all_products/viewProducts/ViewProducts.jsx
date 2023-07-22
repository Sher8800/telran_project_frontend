import React from 'react'
import styles from '../all_products.module.css'

export default function ViewProducts({ products }) {
  return (
    <>
      {products.map((product) => {

        return <div key={product.id} className={styles.product_container}>
          <div >
            <img className={styles.img_secateurs} src={product.imgSrc} alt="" />
          </div>
          <div className={styles.product_description}>
            <div className={styles.container_price}>
              <p className={styles.new_price}>{product.newPrice}</p>
              <p className={styles.old_price}>{product.oldPrice}</p>
              <p className={styles.discount}>{product.discount}</p>
            </div>
            <p className={styles.name_product}>{product.name}</p>
          </div>
        </div>

      })}
    </>
  )
}
