import React from 'react'
import styles from '../stylesModule/Products.module.css'
import SortProducts from '../../filtrationModule/SortProducts';
import FilterProducts from '../../filtrationModule/FilterProducts';
import { useDispatch } from 'react-redux'
import { addProduct } from '../../../store/slices/BasketSlices';
import { useSort } from '../../../hooks/useSort';
import { useFilterByPrice } from '../../../hooks/useFilterByPrice';
import CheckBox from '../../filtrationModule/CheckBox';
import { useFilter } from '../../../hooks/useFilter';
import { NavLink } from 'react-router-dom';
import Button from '../../UI/button/Button';
import ProductData from '../productData/ProductData';
import { API_URL } from '../../../config/api';
import { useGetAllProductsQuery } from '../../../store/api/productApi';
import BackToTopButton from '../../UI/button/backToTopButton/BackToTopButton';
import { ToastContainer, toast } from 'react-toastify';
import Notifications from '../../UI/notification/Notifications';
import useWindowSize from '../../../hooks/useWindowSize';


const initProducts = [];

export default function All_products() {

  const dispatch = useDispatch()

  const { data: allProducts = initProducts } = useGetAllProductsQuery()

  const { width } = useWindowSize();

  const {
    filterValue,
    filteredList: filteredListByDiscount,
    onFilter } = useFilter(allProducts, 'discont_price')

  const { filterByMax, filterByMin, filteredList, priceFrom, priceTo } = useFilterByPrice(filteredListByDiscount)

  const { onSort, sortedList, sortMode } = useSort(filteredList, 'price')

  const addProductInBasket = (product) => {
    dispatch(addProduct(product))
    toast.success("Product added to cart!")
  }

  return (
    <div className={styles.tools_container}>
      <p className={styles.page_title}>All products</p>

      {width > 768 ? <div className={styles.form_container}>
        <FilterProducts priceFrom={priceFrom} priceTo={priceTo} filterByMin={filterByMin} filterByMax={filterByMax} />
        <CheckBox type='checkbox' checked={filterValue} onChange={onFilter} />
        <SortProducts sortProducts={onSort} sortMode={sortMode} />
      </div> : ''}

      <div className={styles.products_container}>

        {sortedList.map((product) => (
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
      <BackToTopButton />
    </div>
  )
}

