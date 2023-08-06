import React from 'react'
import styles from '../all_products.module.css'
import { API_URL } from '../../../../globalVariables/GlobalVariables'



export default function ViewProducts({ allProducts }) {

  return (
    <>
      {allProducts.map((product) => {

        return <div key={product.id} className={styles.product_container}>
          <div >
            <img className={styles.img_secateurs} src={API_URL + product.image} alt="product" />

          </div>
          <div className={styles.product_description}>
            <div className={styles.container_price}>
              <p className={styles.new_price}>{product.price + '$'}</p>
              {product.discont_price ?
                <>
                  <p className={styles.old_price}>{Math.ceil(product.price / (1 - (product.discont_price / 100)))}</p>
                  <p className={styles.discount}>{product.discont_price + '%'}</p>
                </>
                : ''
              }
            </div>
            <p className={styles.name_product}>{product.title}</p>
          </div>
        </div>

      })}
    </>
  )
}

