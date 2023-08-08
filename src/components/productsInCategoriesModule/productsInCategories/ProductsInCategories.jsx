import React, { useState, useEffect } from 'react'
import styles from './productsInCategories.module.css'
import { API_URL } from '../../../globalVariables/GlobalVariables'
import FilterProducts from '../all_products/filterProducts/FilterProducts';
import SortProducts from '../all_products/sortProducts/SortProducts';
import { useLocation } from "react-router";

export default function ProductsInCategories() {

  const [categorieProducts, setCategorieProducts] = useState([])
  const [defaultProducts, setDefaultProducts] = useState([]);

  const location = useLocation();
  const { state } = location;

  const URL = `${API_URL}categories/${state.id}`

  useEffect(() => {
    fetch(URL)
      .then(response => response.json())
      .then(products => { setCategorieProducts([...products.data]); setDefaultProducts([...products.data]) });
  }, [])

  const sortProducts = (event) => {

    switch (event.target.value) {

      case 'highter':
        categorieProducts.sort((a, b) => {
          return b.price - a.price
        })
        setCategorieProducts([...categorieProducts])
        break;

      case 'lower':
        categorieProducts.sort((a, b) => {
          return a.price - b.price
        })
        setCategorieProducts([...categorieProducts])
        break;

      default:
        setCategorieProducts([...defaultProducts])
        break;
    }
  }

  const filterProductsByMin = (priceFrom) => {
    const filteredProducts = defaultProducts.filter((product) => {
      return product.price > priceFrom
    })
    setCategorieProducts([...filteredProducts])
  }

  const filterProductsByMax = (priceTo) => {
    const filteredProducts = defaultProducts.filter((product) => {
      return product.price < priceTo
    })
    setCategorieProducts([...filteredProducts])
  }


  return (
    <div className={styles.tools_container}>
      <p className={styles.rubric}>{state.title}</p>

      <div className={styles.form_container}>

        <FilterProducts filterProductsByMin={filterProductsByMin} filterProductsByMax={filterProductsByMax} />

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

        {categorieProducts.map((product) => {
          return <div className={styles.product_container} key={product.id}>
            <img className={styles.img_product} src={API_URL + product.image} alt="product" />
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

        })}
      </div>
    </div >
  )
}


