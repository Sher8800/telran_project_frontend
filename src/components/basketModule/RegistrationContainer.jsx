import React from 'react'
import styles from './Basket.module.css';
import Input from '../UI/input/Input'
import Button from '../UI/button/Button';



export default function RegistrationContainer({ order }) {
  return (
    <div className={styles.registration_container}>

      <p className={styles.text_order}>Order details</p>

      <div className={styles.total_price_container}>
        <p className={styles.total}>Total</p>
        <p className={styles.total_price}>{order}<span className={styles.order_dollar}>$</span></p>
      </div>

      <div className={styles.btn_registration_container}>
        <Input className={styles.input_phone} placeholder='+49' type='tel' />
        <Button className={styles.btn_order} buttonText='Order' />
      </div>

    </div>
  )
}
