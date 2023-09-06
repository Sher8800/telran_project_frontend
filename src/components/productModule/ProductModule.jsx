import React, { useEffect, useState } from 'react'
import styles from './Product.module.css'
import { useLocation } from "react-router";
import { API_URL } from '../../config/api';
import Button from '../UI/button/Button';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../store/slices/BasketSlices';
import { useGetProductQuery } from '../../store/api/productApi';
import ProductData from '../productsModule/productData/ProductData';


const initProducts = [];

export default function ProductsModule() {

  const dispatch = useDispatch()

  const location = useLocation()
  const { state } = location;

  const { data: cart = initProducts } = useGetProductQuery(state.id)

  const addProductInBasket = (product) => {
    dispatch(addProduct(product))
  }

  return (
    <>
      {cart.map((product) => (
        <div key={product.id} className={styles.products_container}>
          <p className={styles.title}>{product.title}</p>
          <div className={styles.product_container}>
            <img className={styles.img} src={API_URL + product.image} alt="product" />
            <div className={styles.description_container}>

              <div className={styles.container_price_btn}>
                <div className={styles.container_price}>

                  {product.discont_price ?
                    <>
                      <p className={styles.discount_price}>{product.discont_price + '$'}</p>
                      <p className={styles.price}>{product.price + '$'}</p>
                      <p className={styles.discount}>{`- ${Math.ceil(100 - (product.discont_price / (product.price / 100)))} %`}</p>
                    </>
                    :
                    <p className={styles.discount_price}>{product.price + '$'}</p>
                  }

                </div>


                <Button onClick={() => addProductInBasket(product)} className={styles.btn} buttonText={'To cart'} />
              </div>
              <p className={styles.text_description}>Description</p>
              <p className={styles.description}>{product.description}</p>
            </div>
          </div>
        </div>
      ))
      }
    </>
  )
}
