import React, { useState } from 'react'
import styles from './Discount.module.css'
import { useGetDiscountMutation } from '../../../store/api/productApi'

export default function Discount() {

  const [phoneNumber, setPhoneNumber] = useState('')

  const [getDiscount, { isSuccess, data }] = useGetDiscountMutation()

  const onPhoneChange = (event) => {
    setPhoneNumber(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    getDiscount({ phone: phoneNumber })
  }

  return (
    <div className={styles.container}>
      <div className={styles.img}></div>
      <div className={styles.container_discount}>
        <div className={styles.text_discount}>
          <p className={styles.discount}>5% off </p>
          <p className={styles.text}>on the first order</p>
        </div>
        <form onSubmit={onSubmit} className={styles.form_discount}>
          <input onChange={onPhoneChange} value={phoneNumber} className={styles.phone} type="tel" placeholder='+49' />
          <button className={styles.btn}>Get a discount</button>
        </form>
      </div>
    </div>
  )
}
