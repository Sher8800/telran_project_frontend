import React from 'react'
import styles from './Basket.module.css';
import { useForm } from 'react-hook-form'
import { useSendProductMutation } from '../../store/api/productApi';
import Button from '../UI/button/Button';
import Input from '../UI/input/Input';



export default function RegistrationContainer({ order, basketProducts }) {

  const [sendProduct] = useSendProductMutation()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();



  const onSubmit = (data) => {
    console.log(data, basketProducts)
    sendProduct({ ...data, order: basketProducts })
    reset()
  };

  return (
    <div className={styles.registration_container}>

      <div className={styles.order_container}>

        <p className={styles.text_order}>Order details</p>

        <div className={styles.total_price_container}>
          <p className={styles.total}>Total</p>
          <p className={styles.total_price}>{order}<span className={styles.order_dollar}>$</span></p>
        </div>

      </div>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.btn_container}>

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

        <Button className={styles.btn_order} buttonText='Order' />

      </form >

    </div >
  )
}
