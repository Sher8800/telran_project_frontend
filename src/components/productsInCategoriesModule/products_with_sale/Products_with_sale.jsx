import React, { useMemo, useEffect } from 'react'
import styles from './products_with_sale.module.css'
import SortProducts from '../all_products/sortProducts/SortProducts';
import FilterProducts from '../all_products/filterProducts/FilterProducts';
import { useLocation } from 'react-router-dom';
import { API_URL } from '../../../config/api';
import { useDispatch, useSelector } from 'react-redux';
import { useFilterByPrice } from '../../../hooks/useFilterByPrice';
import { useSort } from '../../../hooks/useSort';
import { addProduct } from '../../../store/slices/BasketSlices';
import { setProducts } from '../../../store/slices/ProductsSlices';
import { NavLink } from 'react-router-dom'
import { ProductService } from '../../../services/product.service';
import Button from '../../../UI/button/pathButton'

export default function Products_with_sale() {

  const allProducts = useSelector(state => state.products.products)

  const dispatch = useDispatch()

  useEffect(() => {
    const getProducts = async () => {
      const products = await ProductService.getProducts()
      dispatch(setProducts(products))
    }
    getProducts()
  }, [])

  const productsWithSale = useMemo(() => {
    return allProducts.filter(product => product.discont_price)
  }, [allProducts])

  const { filterByMax, filterByMin, filteredList, priceFrom, priceTo } = useFilterByPrice(productsWithSale)

  const { onSort, sortedList, sortMode } = useSort(filteredList, 'price')

  const addProductInBasket = (product) => {
    dispatch(addProduct(product))
  }

  const location = useLocation;
  const { state } = location;

  return (
    <div className={styles.tools_container}>
      <p className={styles.rubric}>Products with sale</p>

      <div className={styles.form_container}>

        <FilterProducts priceFrom={priceFrom} priceTo={priceTo} filterByMin={filterByMin} filterByMax={filterByMax} />

        <div className={styles.sort_container}>
          <span className={styles.text}>Sorted</span>
          <span>
            <SortProducts sortProducts={onSort} sortMode={sortMode} />
          </span>
        </div>

      </div>

      <div className={styles.products_container}>

        {sortedList.map((product) => (
          <div key={product.id} className={styles.product_container}>
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
          </div>
        ))}

      </div>
    </div>
  )
}

