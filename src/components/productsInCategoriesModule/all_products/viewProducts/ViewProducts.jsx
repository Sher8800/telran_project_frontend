import React from 'react'
import styles from '../all_products.module.css'
import { API_URL } from '../../../../globalVariables/GlobalVariables'
import { NavLink } from 'react-router-dom'
import Button from '../../../../UI/button'


export default function ViewProducts({ allProducts, addProduct }) {

  return (
    <>
      {allProducts.map((product) => (

        <div key={product.id} className={styles.product_container}>
          <NavLink to={'/product'} state={{ id: product.id, title: product.title }} >
            <img className={styles.img_product} src={API_URL + product.image} alt="product" />
          </NavLink>
          <Button className={styles.btn_add} onClick={() => addProduct(product)} buttonText={'Add to cart'} />

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
            <p className={styles.product_title}>{product.title}</p>
          </div>
        </div>

      ))}
    </>
  )
}

