import React, { useState } from 'react';
import styles from './Basket.module.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { basketSelector, removeProduct } from '../../../store/slices/BasketSlices';
import ProductsСontainer from '../productsСontainer/ProductsСontainer';
import RegistrationForm from '../registrationForm/RegistrationForm';
import smiley from '../../../images/basket/smiley.jpg'
import BackToTopButton from '../../UI/button/backToTopButton/BackToTopButton';

export default function Basket() {

  const [sendingOrder, setSendingOrder] = useState(false)

  const { basket: basketProducts } = useSelector(basketSelector)

  const allPrice = basketProducts.map(product => {
    if (product.discount_total_price) {
      return product.discount_total_price
    }
    return product.total_price
  })

  let totalAmount = (allPrice.reduce((total, value) => total + value, 0)).toFixed(2)

  const dispatch = useDispatch()

  const removeProductInBasket = (product) => {
    dispatch(removeProduct(product))
  }

  const navigate = useNavigate()

  const goBack = () => navigate(-1)

  if (sendingOrder) {
    return (
      <div className={styles.modal_container}>
        <div className={styles.modal_window}>
          <p className={styles.modal_text}>
            Congratulations on your first purchase!<br />
            Our manager will contact you shortly!
          </p>
        </div>
        <BackToTopButton />
      </div>
    )
  }

  return (
    <>
      {basketProducts.length ?
        <div className={styles.basket_container}>

          <p className={styles.text_title}>Shopping cart</p>
          <span onClick={goBack} className={styles.link_text}>Back to the store {">"}</span>

          <div className={styles.product_order_container}>
            <ProductsСontainer basketProducts={basketProducts} removeProductInBasket={removeProductInBasket} />
            <RegistrationForm setSendingOrder={setSendingOrder} basketProducts={basketProducts} totalAmount={totalAmount} />
          </div>

          <BackToTopButton />
        </div >
        :
        <div className={styles.basket_container}>
          <div className={styles.product_order_container}>
            < div className={styles.empty_basket}>
              <img className={styles.smiley} src={smiley} alt='Smiley' />
              <p className={styles.text}>Empty</p>
            </ div>
            <RegistrationForm basketProducts={basketProducts} totalAmount={totalAmount} />
          </div>
          <BackToTopButton />
        </div >
      }
    </>
  )
}


