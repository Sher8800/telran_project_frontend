import React, { useMemo } from 'react'
import styles from '../../productsModule/stylesModule/Products.module.css'
import { NavLink } from 'react-router-dom'
import { API_URL } from '../../../config/api'
import Button from '../../UI/button/Button'
import { addProduct } from '../../../store/slices/BasketSlices'
import { useDispatch } from 'react-redux'
import ProductData from '../../productsModule/productData/ProductData'
import { useGetAllProductsQuery } from '../../../store/api/productApi'




const initProducts = [];

export default function Sale() {

  const { data: allProducts = initProducts } = useGetAllProductsQuery()

  const productsWithSale = useMemo(() => {
    return (allProducts.filter(product => product.discont_price)).slice(0, 4)
  }, [allProducts])

  const dispatch = useDispatch()

  const addProductInBasket = (product) => {
    dispatch(addProduct(product))
  }

  return (
    <div className={styles.container}>
      <p className={`${styles.page_title} ${styles.sale}`}>Sale</p>

      <div className={styles.products_container}>
        {productsWithSale.map(product => (
          <div key={product.id} className={styles.product_container}>
            <NavLink to={'/product'} state={{ id: product.id, title: product.title }} >
              <img className={styles.img_product} src={API_URL + product.image} alt="product" />
            </NavLink>
            <Button className={styles.btn_add} onClick={() => addProductInBasket(product)} buttonText={'Add to cart'} />
            <ProductData product={product} />
          </div>
        ))}
      </div>

    </div>

  )
}
