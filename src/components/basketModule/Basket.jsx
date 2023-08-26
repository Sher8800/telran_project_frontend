import React from 'react';
import styles from './Basket.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { basketSelector, removeProduct } from '../../store/slices/BasketSlices';
import ProductsСontainer from './ProductsСontainer';
import RegistrationForm from './RegistrationForm';
import smiley from '../../images/basket/smiley.jpg'
import BackToTopButton from '../UI/button/backToTopButton/BackToTopButton';

export default function Basket() {

  const { basket: basketProducts } = useSelector(basketSelector)

  const amount = basketProducts.map(product => product.price)

  let order = amount.reduce((total, value) => total + value, 0)

  const dispatch = useDispatch()

  const removeProductInBasket = (product) => {
    dispatch(removeProduct(product))
  }

  const navigate = useNavigate()

  const goBack = () => navigate(-1)

  if (!basketProducts.length) {
    return (< div className={styles.empty_basket}>
      <img className={styles.smiley} src={smiley} alt='Smiley' />
      <p className={styles.text}>Empty</p>
    </ div>)
  }

  return (
    <div className={styles.basket_container}>

      <p className={styles.text_title}>Shopping cart</p>
      <span onClick={goBack} className={styles.link_text}>Back to the store {">"}</span>

      <div className={styles.product_order_container}>
        <ProductsСontainer basketProducts={basketProducts} removeProductInBasket={removeProductInBasket} />
        <RegistrationForm basketProducts={basketProducts} order={order} />
      </div>

      <BackToTopButton />

    </div >

  )
}


