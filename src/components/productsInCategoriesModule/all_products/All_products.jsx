import React, { useEffect, useState } from 'react'
import styles from './all_products.module.css'
import secateurs from '../../../assets/productsInCategories/secateurs.png'
import ViewProducts from './viewProducts/ViewProducts';
import SortProducts from './sortProducts/SortProducts';
import FilterProducts from './filterProducts/FilterProducts';


export default function All_products() {


  const productsInitialState = [
    {
      name: 'as;dfk',
      newPrice: 2,
      oldPrice: 4,
      discount: 1,
      imgSrc: secateurs,
      id: 1,
    },

    {
      name: 'as;dfk',
      newPrice: 6,
      oldPrice: 5,
      discount: 2,
      imgSrc: secateurs,
      id: 2,
    },
    {
      name: 'as;dfk',
      newPrice: 9,
      oldPrice: 43,
      discount: 8,
      imgSrc: secateurs,
      id: 3,
    },
    {
      name: 'alk',
      newPrice: 0,
      oldPrice: 7,
      discount: 0,
      imgSrc: secateurs,
      id: 4,
    },
    {
      name: 'alk',
      newPrice: 0,
      oldPrice: 0,
      discount: 0,
      imgSrc: secateurs,
      id: 5,
    },
    {
      name: 'ppkop',
      newPrice: 0,
      oldPrice: 0,
      discount: 0,
      imgSrc: secateurs,
      id: 6,
    },
    {
      name: 'ppkop',
      newPrice: 0,
      oldPrice: 0,
      discount: 0,
      imgSrc: secateurs,
      id: 7,
    },
    {
      name: 'ppkop',
      newPrice: 0,
      oldPrice: 0,
      discount: 0,
      imgSrc: secateurs,
      id: 8,
    },
  ];

  let url = 'http://localhost:3333/products/all'

  const productsAll = []

  const [allProducts, setAllProducts] = useState(productsAll)


  fetch(url)
    .then(response => response.json())
    .then(products => setAllProducts([...products]));

  const sortProducts = (event) => {

    switch (event.target.value) {

      case 'highter':
        allProducts.sort((a, b) => {
          return a.price - b.price
        })
        setAllProducts([...allProducts])
        console.log(allProducts);
        break;

      case 'lower':
        allProducts.sort((a, b) => {
          return b.price - a.price
        })
        setAllProducts([...allProducts])
        break;

      // default: setAllProducts([...productsAll])
      // break;
    }
  }

  const filterProducts = (priceFrom, priceTo) => {
    allProducts.filter((product) => {
      return setAllProducts(product.price > priceFrom && product.price < priceTo)
    })
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

