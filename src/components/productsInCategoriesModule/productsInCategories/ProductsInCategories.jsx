import React, { useState, useEffect } from 'react'
import styles from './productsInCategories.module.css'
import { API_URL } from '../../../config/api'
import FilterProducts from '../all_products/filterProducts/FilterProducts';
import SortProducts from '../all_products/sortProducts/SortProducts';
import { useLocation } from "react-router";
import { useFilterByPrice } from '../../../hooks/useFilterByPrice';
import { useSort } from '../../../hooks/useSort';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../../store/slices/BasketSlices';
import { NavLink } from 'react-router-dom';
import Button from '../../../UI/button/Button';
import CheckBox from '../../../UI/checkBox/CheckBox';
import { useFilter } from '../../../hooks/useFilter';
import { ProductService } from '../../../services/product.service';

export default function ProductsInCategories() {

  const [categorieProducts, setCategorieProducts] = useState([])

  const location = useLocation();
  const { state } = location;

  useEffect(() => {
    const getProducts = async () => {
      const products = await ProductService.getProductsInCategories(state.id)
      setCategorieProducts(products.data)
    }
    getProducts()
  }, [])

  const {
    filterValue,
    filteredList: filteredListByDiscount,
    onFilter } = useFilter(categorieProducts, 'discont_price')

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
      <p className={styles.rubric}>{state.title}</p>

      <div className={styles.form_container}>
        <FilterProducts priceFrom={priceFrom} priceTo={priceTo} filterByMin={filterByMin} filterByMax={filterByMax} />

        <div className={styles.discount_container}>
          <span className={styles.text}>Discounted items</span>
          <CheckBox type='checkbox' checked={filterValue} onChange={onFilter} />
        </div>

        <div className={styles.sort_container}>
          <span className={styles.text}>Sorted</span>
          <span>
            <SortProducts sortProducts={onSort} sortMode={sortMode} />
          </span>
        </div>
      </div>

      <div className={styles.products_container}>

        {sortedList.map((product) => (
          <div className={styles.product_container} key={product.id}>

            <NavLink to={'/product'} state={{ id: product.id, title: product.title }}>
              <img className={styles.img_product} src={API_URL + product.image} alt="product" />
            </NavLink>

            <Button className={styles.btn_add} onClick={() => addProductInBasket(product)} buttonText={'Add to cart'} />

            <div className={styles.product_description}>
              <div className={styles.container_price}>

                <p className={styles.new_price}>{product.price}<span className={styles.price_dollar}>$</span></p>

                {product.discont_price ?
                  <>
                    <p className={styles.old_price}>{Math.ceil(product.price / (1 - (product.discont_price / 100))) + '$'}</p>
                    <p className={styles.discount}>{product.discont_price + '%'}</p>
                  </>
                  : ''
                }

              </div>
              <p className={styles.name_product}>{product.title}</p>
            </div>
          </div>
        ))}

      </div>
    </div >
  )
}


