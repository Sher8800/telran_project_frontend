import React from 'react'
import styles from './RegistrationForm.module.css';
import { useForm } from 'react-hook-form'
import { useSendProductMutation } from '../../../store/api/productApi';
import Button from '../../UI/button/Button';
import Input from '../../UI/input/Input';
import { ToastContainer, toast } from 'react-toastify';
import Notifications from '../../UI/notification/Notifications';
import { emptyTrash } from '../../../store/slices/BasketSlices';
import { useDispatch } from 'react-redux';


export default function RegistrationForm({ totalAmount, basketProducts, setSendingOrder }) {

  const dispatch = useDispatch()

  const emptyTrashArray = (productId) => {
    dispatch(emptyTrash(productId))
  }

  const [sendProduct] = useSendProductMutation()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();



  const onSubmit = (data) => {
    sendProduct({ ...data, totalAmount, order: basketProducts })
    emptyTrashArray()
    toast.success("Application accepted!")
    setSendingOrder(true)
    reset()
  };


  return (
    <div className={styles.registration_container}>

      <div className={styles.order_container}>
        <p className={styles.text_order}>Order details</p>
        <div className={styles.total_price_container}>
          <p className={styles.total}>Total</p>
          <p className={styles.total_price}>{totalAmount}<span className={styles.order_dollar}>$</span></p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.btn_container}>
        <label className={styles.input_container}>
          <p className={styles.phohe_Number}>Phohe number</p>

          <Input disabled={!basketProducts.length && 'disabled'} type='number' {...register('phone', {
            required: 'field is required',
            minLength: { value: 14, message: '14 characters' },
            maxLength: { value: 14, message: '14 characters' },
          })} className={styles.input_phone} placeholder='+49' />

          <>{errors.phone && <p className={styles.error}>{errors.phone.message}</p>}</>
        </label>
        <Button disabled={!basketProducts.length && 'disabled'} className={styles.btn_order} buttonText='Order' />
        <Notifications ToastContainer={ToastContainer} />
      </form >

    </div >
  )
}
