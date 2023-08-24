import React from 'react'
import Button from '../UI/button/Button'
import styles from './Basket.module.css';
import { API_URL } from '../../config/api';
import plus from '../../images/basket/plus.png';
import imgDelete from '../../images/basket/delete.png';

export default function ProductsСontainer({ basketProducts, removeProductInBasket }) {
  return (

    <div className={styles.products_container}>

      {basketProducts.map((product, idx) => (
        < div key={idx} className={styles.product_container} >
          <img className={styles.img_product} src={API_URL + product.image} alt="product" />

          <div className={styles.product_data_container}>

            <p className={styles.description}>{product.title}</p>

            <div className={styles.btn_quantity_container}>
              <Button className={styles.btn_decriment_container} buttonText={<div className={styles.btn_decriment}></div>} />
              <p className={styles.quantity}>1</p>
              <Button className={styles.btn_incriment} buttonText={<img src={plus} alt="incriment" />} />
            </div>

          </div>

          <div className={styles.product_price_container}>
            <p className={styles.new_price}>{product.price}<span className={styles.new_dollar}>$</span></p>
            {product.discont_price ?
              <p className={styles.old_price}>{Math.ceil(product.price / (1 - (product.discont_price / 100)))}$</p>
              : ''
            }
          </div>

          <img onClick={() => removeProductInBasket(product)} className={styles.img_delete} src={imgDelete} alt='icon' />

        </div>
      )
      )}
    </div>
  )
}
