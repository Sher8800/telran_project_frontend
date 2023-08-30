import React, { useState } from 'react'
import styles from './Discount.module.css'
import { useSendDiscountMutation } from '../../../store/api/productApi'
import Button from '../../UI/button'
import Input from '../../UI/input/Input'
import { useForm } from 'react-hook-form'

export default function Discount() {

  const [sendDiscount] = useSendDiscountMutation()
  const [setsendState, setSetsendState] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    sendDiscount({ ...data })
    setSetsendState(true)
    reset()
  };


  return (
    <div className={styles.container}>
      <div className={styles.img}></div>
      <>{!setsendState ?
        <div className={styles.container_discount}>
          <p className={styles.discount}>5% off </p>
          <p className={styles.text}>on the first order</p>

          <form onSubmit={handleSubmit(onSubmit)} className={styles.form_discount}>
            <label className={styles.input_container}>
              <p className={styles.phohe_Number}>Phohe number</p>

              <Input type='number' {...register('phone', {
                required: 'field is required',
                minLength: {
                  value: 14,
                  message: '14 characters',
                },
                maxLength: {
                  value: 14,
                  message: '14 characters',
                },
              })} className={styles.input_phone} placeholder='+49' />

              <>{errors.phone && <p className={styles.error}>{errors.phone.message}</p>}</>
            </label>
            <Button className={styles.btn_order} buttonText={"Get a discount"} />
          </form>
        </div>
        :
        <div className={styles.send_container}>
          <p className={styles.text_send}>Congratulations!!! You have received a discount on all products!</p>
        </div>
      }</>
    </div>
  )
}
