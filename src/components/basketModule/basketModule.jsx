import React from 'react';
import styles from './basket.module.css';
import imgProduct from '../../assets/basket/curb_tape.png';
import imgDelete from '../../assets/basket/delete.png';
import forward from '../../assets/basket/icon-forward.png';
import plus from '../../assets/basket/plus.png';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { API_URL } from '../../globalVariables/GlobalVariables';


export default function BasketModule() {

  const basketProduct = useSelector(state => state.basket)
  const dispatch = useDispatch()
  console.log(basketProduct);



  return (
    <div className={styles.basket_container}>
      <div className={styles.title_container}>

        <p className={styles.text_title}>Shopping cart</p>

        <Link className={styles.link_back}>
          <span className={styles.link_text}>Back to the store</span>
          <img className={styles.img_forward} src={forward} alt="icon" />
        </Link>

      </div>

      <div className={styles.product_order_container}>

        <div className={styles.products_container}>
          {basketProduct.map((product) => (
            // console.log(product);
            <div className={styles.product_container}>
              <img className={styles.img_product} src={API_URL + product.image} alt="product" />

              <div className={styles.product_data_container}>

                <p className={styles.description}>{product.title}</p>

                <div className={styles.btn_quantity_container}>
                  <button className={styles.btn_decriment}></button>
                  <p className={styles.quantity}>1</p>
                  <button className={styles.btn_incriment}><img src={plus} alt="incriment" /></button>
                </div>

              </div>

              <div className={styles.product_price_container}>
                <p className={styles.new_price}>223<span className={styles.new_dollar}>$</span></p>
                <p className={styles.old_price}>432<span className={styles.old_dollar}>$</span></p>
              </div>

              <img className={styles.img_delete} src={imgDelete} alt='icon' />

            </div>
          ))}
        </div>

        <div className={styles.registration_container}>

          <p className={styles.text_order}>Order details</p>

          <div className={styles.total_price_container}>
            <p className={styles.total}>Total</p>
            <p className={styles.total_price}>3454<span className={styles.order_dollar}>$</span></p>
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
