import React, { useMemo } from 'react'
import styles from '../stylesModule/Products.module.css'
import SortProducts from '../../filtrationModule/SortProducts';
import FilterProducts from '../../filtrationModule/FilterProducts';
import { API_URL } from '../../../config/api';
import { useDispatch } from 'react-redux';
import { useFilterByPrice } from '../../../hooks/useFilterByPrice';
import { useSort } from '../../../hooks/useSort';
import { addProduct } from '../../../store/slices/BasketSlices';
import { NavLink } from 'react-router-dom'
import Button from '../../UI/button'
import ProductData from '../productData/ProductData';
import BackToTopButton from '../../UI/button/backToTopButton/BackToTopButton';
import { ToastContainer, toast } from 'react-toastify';
import Notifications from '../../UI/notification/Notifications';
import { useGetAllProductsQuery } from '../../../store/api/productApi';
import useWindowSize from '../../../hooks/useWindowSize';

const initProducts = [];

export default function Products_with_sale() {

  const { data: allProducts = initProducts } = useGetAllProductsQuery()

  const { width } = useWindowSize();

  const productsWithSale = useMemo(() => {
    return allProducts.filter(product => product.discont_price)
  }, [allProducts])

  const { filterByMax, filterByMin, filteredList, priceFrom, priceTo } = useFilterByPrice(productsWithSale)

  const { onSort, sortedList, sortMode } = useSort(filteredList, 'price')

  const dispatch = useDispatch()

  const addProductInBasket = (product) => {
    dispatch(addProduct(product))
    toast.success("Product added to cart!")
  }

  return (
    <div className={styles.tools_container}>
      <p className={styles.page_title}>Products with sale</p>

      {width > 768 ? <div className={styles.form_container_sale}>
        <FilterProducts priceFrom={priceFrom} priceTo={priceTo} filterByMin={filterByMin} filterByMax={filterByMax} />
        <SortProducts sortProducts={onSort} sortMode={sortMode} />
      </div> : ''}

      <div className={styles.products_container}>
        {sortedList.map((product) => (
          <div key={product.id} className={styles.product_container}>
            <NavLink to={'/product'} state={{ id: product.id, title: product.title }}>
              <img className={styles.img_product} src={API_URL + product.image} alt="product" />
            </NavLink>
            <Button className={styles.btn_add} onClick={() => addProductInBasket(product)} buttonText={'Add to cart'} />
            <ProductData product={product} />
          </div>
        ))}
      </div>

      <Notifications ToastContainer={ToastContainer} />
      <BackToTopButton />

    </div>
  )
}

