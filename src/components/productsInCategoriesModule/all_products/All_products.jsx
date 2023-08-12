import React, { useEffect, useState } from 'react'
import styles from './all_products.module.css'
import ViewProducts from './viewProducts/ViewProducts';
import SortProducts from './sortProducts/SortProducts';
import FilterProducts from './filterProducts/FilterProducts';
import { useSelector, useDispatch } from 'react-redux'
import { setProducts } from '../../../store/slices/ProductsSlices'
import { addProduct, removeProduct } from '../../../store/slices/BasketSlices';
import { ProductService } from '../../../services/product.service';
import { useSort } from '../../../hooks/useSort';
import { useFilterByPrice } from '../../../hooks/useFilterByPrice';

export default function All_products() {

  const allProducts = useSelector(state => state.products.products)

  const { filterByMax, filterByMin, filteredList, priceFrom, priceTo } = useFilterByPrice(allProducts)

  const { onSort, sortedList, sortMode } = useSort(filteredList, 'price')

  const dispatch = useDispatch()

  const basketProductAll = useSelector(state => state.basketProducts.basket)

  const basketProducts = basketProductAll.filter((el, idx) => basketProductAll.indexOf(el) === idx);
  localStorage.setItem('basket', JSON.stringify(basketProducts))

  useEffect(() => {
    const getProducts = async () => {
      const products = await ProductService.getProducts()
      dispatch(setProducts(products))
    }
    getProducts()
  }, [])

  const addProductInBasket = (product) => {
    dispatch(addProduct(product))
  }

  return (
    <div className={styles.tools_container}>
      <p className={styles.rubric}>All products</p>

      <div className={styles.form_container}>

        <FilterProducts priceFrom={priceFrom} priceTo={priceTo} filterByMin={filterByMin} filterByMax={filterByMax} />

        <div className={styles.discount_container}>
          <span className={styles.text}>Discounted items</span>
          <span>
            <input type='checkbox' className={styles.discount_checkbox}></input>
          </span>
        </div>

        <div className={styles.sort_container}>
          <span className={styles.text}>Sorted</span>
          <span>
            <SortProducts sortProducts={onSort} sortMode={sortMode} />
          </span>
        </div>

      </div>

      <div className={styles.products_container}>
        <ViewProducts addProduct={addProductInBasket} allProducts={sortedList} />
      </div>
    </div>
  )
}

