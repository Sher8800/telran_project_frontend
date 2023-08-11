import React from 'react';
import styles from './basket.module.css';
import imgProduct from '../../assets/basket/curb_tape.png';
import imgDelete from '../../assets/basket/delete.png';
import forward from '../../assets/basket/icon-forward.png';
import plus from '../../assets/basket/plus.png';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { API_URL } from '../../globalVariables/GlobalVariables';
import Button from '../../UI/button/Button';
import { useState } from 'react';


export default function BasketModule() {

  const productFromStorage = localStorage.getItem('basket')
  const basketProducts = JSON.parse(productFromStorage)

  const amount = basketProducts.map(product => product.price)

  let total = amount.reduce((total, value) => total + value, 0)

  return (
    <div className={styles.basket_container}>
      <div className={styles.title_container}>

        <p className={styles.text_title}>Shopping cart</p>

        <Link to={'/categories'} className={styles.link_back}>
          <span className={styles.link_text}>Back to the store</span>
          <img className={styles.img_forward} src={forward} alt="icon" />
        </Link>

      </div>

      <div className={styles.product_order_container}>

        <div className={styles.products_container}>

          {basketProducts.map((product) => (
            <div key={product.id} className={styles.product_container}>
              <img className={styles.img_product} src={API_URL + product.image} alt="product" />

              <div className={styles.product_data_container}>

                <p className={styles.description}>{product.title}</p>

                <div className={styles.btn_quantity_container}>
                  <Button className={styles.btn_decriment} />
                  <p className={styles.quantity}>1</p>
                  <Button className={styles.btn_incriment} buttonText={<img src={plus} alt="incriment" />} />
                </div>

              </div>

              <div className={styles.product_price_container}>
                <p className={styles.new_price}>{product.price}<span className={styles.new_dollar}>$</span></p>
                {product.discont_price ?
                  <p className={styles.old_price}>{Math.ceil(product.price / (1 - (product.discont_price / 100)))}<span className={styles.old_dollar}>$</span></p>
                  : ''
                }
              </div>

              <img className={styles.img_delete} src={imgDelete} alt='icon' />

            </div>
          ))}
        </div>

        <div className={styles.registration_container}>

          <p className={styles.text_order}>Order details</p>

          <div className={styles.total_price_container}>
            <p className={styles.total}>Total</p>
            <p className={styles.total_price}>{total}<span className={styles.order_dollar}>$</span></p>
          </div>

          <div className={styles.btn_registration_container}>
            <input className={styles.input_phone} placeholder='Phone number'></input>
            <button className={styles.btn_order}>Order</button>
          </div>

        </div>

      </div>

    </div >
  )
}
