import React, { useEffect, useState } from 'react'
import styles from './all_products.module.css'
import ViewProducts from './viewProducts/ViewProducts';
import SortProducts from './sortProducts/SortProducts';
import FilterProducts from './filterProducts/FilterProducts';
import { API_URL } from '../../../globalVariables/GlobalVariables';

export default function All_products() {

  const URL = `${API_URL}products/all`

  const [allProducts, setAllProducts] = useState([])

  const [defaultProducts, setDefaultProducts] = useState(null);

  useEffect(() => {
    fetch(URL)
      .then(response => response.json())
      .then(products => {
        console.log(products);
        setDefaultProducts([...products]);
        setAllProducts([...products])
      });
  }, [])


  const sortProducts = (event) => {

    switch (event.target.value) {

      case 'highter':
        allProducts.sort((a, b) => {
          return b.price - a.price
        })
        setAllProducts([...allProducts])
        break;

      case 'lower':
        allProducts.sort((a, b) => {
          return a.price - b.price
        })
        setAllProducts([...allProducts])
        break;

      default:
        setAllProducts([...defaultProducts])
        break;
    }
  }

  const filterProducts = (priceFrom, priceTo) => {
    setAllProducts(allProducts.filter((product) => {
      return product.price > priceFrom && product.price < priceTo
    }))
  }


  return (
    <div className={styles.tools_container}>
      <p className={styles.rubric}>All products</p>

      <div className={styles.form_container}>

        <FilterProducts filterProducts={filterProducts} />

        <div className={styles.discount_container}>
          <span className={styles.text}>Discounted items</span>
          <span>
            <input type='checkbox' className={styles.discount_checkbox}></input>
          </span>
        </div>

        <div className={styles.sort_container}>
          <span className={styles.text}>Sorted</span>
          <span>
            <SortProducts sortProducts={sortProducts} />
          </span>
        </div>

      </div>

      <div className={styles.products_container}>
        <ViewProducts allProducts={allProducts} />
      </div>
    </div>
  )
}

