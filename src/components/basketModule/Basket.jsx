import React from 'react';
import styles from './Basket.module.css';
import forward from '../../images/basket/icon-forward.png';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { basketSelector, removeProduct } from '../../store/slices/BasketSlices';
import ProductsСontainer from './ProductsForm';
import RegistrationContainer from './RegistrationForm';
import smiley from '../../images/basket/smiley.jpg'

export default function Basket() {

  const { basket: basketProducts } = useSelector(basketSelector)

  const amount = basketProducts.map(product => product.price)

  let order = amount.reduce((total, value) => total + value, 0)

  const dispatch = useDispatch()

  const removeProductInBasket = (product) => {
    dispatch(removeProduct(product))
  }

  if (!basketProducts.length) {
    return (< div className={styles.empty_basket}>
      <img className={styles.smiley} src={smiley} alt='Smiley' />
      <p className={styles.text}>Empty</p>
    </ div>)
  }

  return (
    <div className={styles.basket_container}>

      <p className={styles.text_title}>Shopping cart</p>
      <Link to={'/categories'} className={styles.link_back}>
        <span className={styles.link_text}>Back to the store {">"}</span>
      </Link>

      <div className={styles.product_order_container}>
        <ProductsСontainer basketProducts={basketProducts} removeProductInBasket={removeProductInBasket} />
        <RegistrationContainer basketProducts={basketProducts} order={order} />
      </div>

    </div >

  )
}


