import React from 'react'
import Button from '../../UI/button/Button'
import styles from './ProductsСontainer.module.css';
import { API_URL } from '../../../config/api';
import plus from '../../../images/basket/plus.png';
import imgDelete from '../../../images/basket/delete.png';
import { decrementProduct, incrementProduct } from '../../../store/slices/BasketSlices';
import { useDispatch } from 'react-redux';

export default function ProductsСontainer({ basketProducts, removeProductInBasket }) {

  const dispatch = useDispatch()

  const incrementProductInBasket = (productId) => {
    dispatch(incrementProduct(productId))
  }

  const decrementProductInBasket = (productId) => {
    dispatch(decrementProduct(productId))
  }

  return (
    <div className={styles.products_container}>

      {basketProducts.map((product, idx) => (
        < div key={idx} className={styles.product_container} >
          <img className={styles.img_product} src={API_URL + product.image} alt="product" />

          {/* <div className={styles.description_container}> */}
          <div className={styles.product_data_container}>

            <p className={styles.description}>{product.title}</p>

            <div className={styles.btn_quantity_container}>
              <Button className={styles.btn_decriment_container} onClick={() => decrementProductInBasket(product.id)} buttonText={<div className={styles.btn_decriment}></div>} />

              <p className={styles.quantity}>{product.count}</p>

              <Button className={styles.btn_incriment} onClick={() => incrementProductInBasket(product.id)} buttonText={<img className={styles.plus} src={plus} alt="incriment" />} />
            </div>

          </div>

          <div className={styles.product_price_container}>
            {product.discont_price ?
              <>
                <p className={styles.discount_price}>{product.discount_total_price}<span className={styles.discount_dollar}>$</span></p>
                <p className={styles.price}>{`${product.total_price}$`}</p>
              </>
              :
              <p className={styles.discount_price}>{product.total_price}<span className={styles.discount_dollar}>$</span></p>
            }
          </div>
          {/* </div> */}

          <img onClick={() => removeProductInBasket(product)} className={styles.img_delete} src={imgDelete} alt='icon' />

        </div>
      )
      )}
    </div>
  )
}
