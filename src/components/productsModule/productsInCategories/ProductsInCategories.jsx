import React from 'react'
import styles from '../stylesModule/Products.module.css'
import { API_URL } from '../../../config/api'
import FilterProducts from '../../filtrationModule/FilterProducts';
import SortProducts from '../../filtrationModule/SortProducts';
import { useLocation } from "react-router";
import { useFilterByPrice } from '../../../hooks/useFilterByPrice';
import { useSort } from '../../../hooks/useSort';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../../store/slices/BasketSlices';
import { NavLink } from 'react-router-dom';
import Button from '../../UI/button/Button';
import CheckBox from '../../filtrationModule/CheckBox';
import { useFilter } from '../../../hooks/useFilter';
import ProductData from '../productData/ProductData';
import { useGetProductsInCategoriesQuery } from '../../../store/api/productApi';



const initProducts = [];

export default function ProductsInCategories() {

  const location = useLocation();
  const { state } = location;

  const { data: categorieProducts = initProducts } = useGetProductsInCategoriesQuery(state.id)

  const {
    filterValue,
    filteredList: filteredListByDiscount,
    onFilter } = useFilter(categorieProducts.data, 'discont_price')

  const {
    filterByMax,
    filterByMin,
    filteredList,
    priceFrom,
    priceTo
  } = useFilterByPrice(filteredListByDiscount)

  const { onSort, sortedList, sortMode } = useSort(filteredList, 'price');

  const dispatch = useDispatch()

  const addProductInBasket = (product) => {
    dispatch(addProduct(product))
  }

  return (
    <div className={styles.tools_container}>
      <p className={styles.page_title}>{state.title}</p>

      <div className={styles.form_container}>
        <FilterProducts priceFrom={priceFrom} priceTo={priceTo} filterByMin={filterByMin} filterByMax={filterByMax} />
        <CheckBox type='checkbox' checked={filterValue} onChange={onFilter} />
        <SortProducts sortProducts={onSort} sortMode={sortMode} />
      </div>

      <div className={styles.products_container}>

        {sortedList ? sortedList.map((product) => (
          <div className={styles.product_container} key={product.id}>
            <NavLink to={'/product'} state={{ id: product.id, title: product.title }}>
              <img className={styles.img_product} src={API_URL + product.image} alt="product" />
            </NavLink>
            <Button className={styles.btn_add} onClick={() => addProductInBasket(product)} buttonText={'Add to cart'} />
            <ProductData product={product} />
          </div>
        )) : ''}

      </div>
    </div >
  )
}


