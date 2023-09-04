import React, { useMemo } from 'react'
import styles from '../../productsModule/stylesModule/Products.module.css'
import { NavLink } from 'react-router-dom'
import { API_URL } from '../../../config/api'
import Button from '../../UI/button/Button'
import { addProduct } from '../../../store/slices/BasketSlices'
import { useDispatch } from 'react-redux'
import ProductData from '../../productsModule/productData/ProductData'
import { useGetAllProductsQuery } from '../../../store/api/productApi'
import { ToastContainer, toast } from 'react-toastify';
import Notifications from '../../UI/notification/Notifications';




const initProducts = [];

export default function Sale() {

  const { data: allProducts = initProducts } = useGetAllProductsQuery()
  console.log(allProducts);

  const productsWithSale = useMemo(() => {
    return (allProducts.filter(product => product.discont_price)).slice(0, 4)
  }, [allProducts])

  const dispatch = useDispatch()

  const addProductInBasket = (product) => {
    dispatch(addProduct(product))
    toast.success("Product added to cart!")
  }

  return (
    <div className={styles.container_sale}>
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

      <Notifications ToastContainer={ToastContainer} />
    </div>

  )
}
