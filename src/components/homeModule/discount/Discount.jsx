import React, { useState } from 'react'
import styles from './Discount.module.css'
import { useGetDiscountMutation } from '../../../store/api/productApi'
import Button from '../../UI/button/Button'
import Input from '../../UI/input/Input'

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
        <p className={styles.discount}>5% off </p>
        <p className={styles.text}>on the first order</p>
        <form onSubmit={onSubmit} className={styles.form_discount}>
          <Input onChange={onPhoneChange} value={phoneNumber} className={styles.phone} type="tel" placeholder='+49' />
          <Button className={styles.btn} buttonText={"Get a discount"} />
        </form>
      </div>
    </div>
  )
}
