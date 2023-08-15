import React, { useEffect, useState } from 'react'
import styles from './ProductsModule.module.css'
import { useLocation } from "react-router";
import { API_URL } from '../../config/api';
import { ProductService } from '../../services/product.service';

export default function ProductsModule() {
  const [cart, setCart] = useState([])

  const location = useLocation()
  const { state } = location;

  useEffect(() => {
    const getProduct = async () => {
      const products = await ProductService.getProduct(state.id)
      setCart(products)
    }
    getProduct()
  }, [])

  return (
    <>
      {cart.map((product) => (
        <div key={product.id} className={styles.products_container}>
          <p className={styles.rubric}>{product.title}</p>
          <div className={styles.product_container}>
            <img className={styles.img} src={API_URL + product.image} alt="product" />
            <div className={styles.description_container}>

              <div className={styles.container_price_btn}>

                <div className={styles.container_price}>

                  <p className={styles.new_price}>{product.price}<span className={styles.dollar_sign}>$</span></p>
                  {product.discont_price ?
                    <>
                      <p className={styles.old_price}>{Math.ceil(product.price / (1 - (product.discont_price / 100)))}</p>
                      <p className={styles.discount}>{product.discont_price + '%'}</p>
                    </>
                    : ''
                  }
                </div>

                <button className={styles.btn}>To cart</button>
              </div>

              <div className={styles.description_product}>
                <p className={styles.text_description}>Description</p>
                <p className={styles.description}>{product.description}</p>
              </div>

            </div>
          </div>
        </div>
      ))
      }
    </>
  )
}
