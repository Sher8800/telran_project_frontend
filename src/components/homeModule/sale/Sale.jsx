import React, { useEffect, useMemo, useState } from 'react'
import styles from './Sale.module.css'
import { ProductService } from '../../../services/product.service'
import { NavLink } from 'react-router-dom'
import { API_URL } from '../../../config/api'
import Button from '../../UI/button/Button'
import { addProduct } from '../../../store/slices/BasketSlices'
import { useDispatch } from 'react-redux'


export default function Sale() {
  const [allProducts, setAllProducts] = useState([])

  useEffect(() => {
    const getAllProducts = async () => {
      const products = await ProductService.getAllProducts()
      setAllProducts(products)
    }
    getAllProducts()
  }, [])

  const productsWithSale = useMemo(() => {
    return (allProducts.filter(product => product.discont_price)).slice(0, 4)
  }, [allProducts])

  const dispatch = useDispatch()

  const addProductInBasket = (product) => {
    dispatch(addProduct(product))
  }

  return (
    <div className={styles.container}>

      <p className={styles.sale}>Sale</p>

      <div className={styles.container_products}>

        {productsWithSale.map(product => (
          <div key={product.id} className={styles.container_product}>
            <NavLink to={'/product'} state={{ id: product.id, title: product.title }}>
              <img className={styles.img_product} src={API_URL + product.image} alt="product" />
            </NavLink>
            <Button className={styles.btn_add} onClick={() => addProductInBasket(product)} buttonText={'Add to cart'} />
            <div className={styles.product_description}>
              <div className={styles.container_price}>
                <p className={styles.new_price}>{product.price + '$'}</p>
                <p className={styles.old_price}>{Math.ceil(product.price / (1 - (product.discont_price / 100))) + '$'}</p>
                <p className={styles.discount}>{'-' + product.discont_price + '%'}</p>
              </div>
              <p className={styles.name_product}>{product.title}</p>
            </div>
          </div>
        ))}

        {/* <div key={product.id} className={styles.product_container}>
          <NavLink to={'/product'} state={{ id: product.id, title: product.title }}>
            <img className={styles.img_product} src={API_URL + product.image} alt="product" />
          </NavLink>
          <Button className={styles.btn_add} onClick={() => addProductInBasket(product)} buttonText={'Add to cart'} />
          <div className={styles.product_description}>
            <div className={styles.container_price}>
              <p className={styles.new_price}>{product.price}<span className={styles.price_dollar}>$</span></p>
              <p className={styles.old_price}>{Math.ceil(product.price / (1 - (product.discont_price / 100))) + '$'}</p>
              <p className={styles.discount}>{product.discont_price + '%'}</p>
            </div>
            <p className={styles.name_product}>{product.title}</p>
          </div>
        </div> */}

        {/* <div className={styles.container_product}>
          <div className={styles.img_flower_basket}></div>
          <div className={styles.product_description}>
            <div className={styles.container_price}>
              <p className={styles.new_price}>100$</p>
              <p className={styles.old_price}>150$</p>
              <p className={styles.discount}>-7%</p>
            </div>
            <p className={styles.name_product}>Flower basket</p>
          </div>
        </div>

        <div className={styles.container_product}>
          <div className={styles.img_aquarium_lock}></div>
          <div className={styles.product_description}>
            <div className={styles.container_price}>
              <p className={styles.new_price}>150$</p>
              <p className={styles.old_price}>200$</p>
              <p className={styles.discount}>-7%</p>
            </div>
            <p className={styles.name_product}>Aquarium lock</p>
          </div>
        </div> */}

      </div>
    </div>
  )
}
