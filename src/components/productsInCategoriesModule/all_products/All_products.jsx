import React, { useEffect, useState } from 'react'
import styles from './all_products.module.css'
import ViewProducts from './viewProducts/ViewProducts';
import SortProducts from './sortProducts/SortProducts';
import FilterProducts from './filterProducts/FilterProducts';
import { API_URL } from '../../../globalVariables/GlobalVariables';
import { useSelector, useDispatch } from 'react-redux'
import { basketSelector, addProduct, removeProduct } from '../../../store/slices/BasketSlices';
import { ProductService } from '../../../services/product.service';


export default function All_products() {


  const [allProducts, setAllProducts] = useState([])

  const [defaultProducts, setDefaultProducts] = useState(null);

  const basketProductAll = useSelector(state => state.basket)
  const basketProducts = basketProductAll.filter((el, idx) => basketProductAll.indexOf(el) === idx);

  localStorage.setItem('basket', JSON.stringify(basketProducts))

  const dispatch = useDispatch()

  useEffect(() => {
    const getProducts = async () => {
      const products = await ProductService.getProducts()
      setDefaultProducts(products);
      setAllProducts(products)
    }
    getProducts()
    // fetch(URL)
    //   .then(response => response.json())
    //   .then(products => {
    //     setDefaultProducts([...products]);
    //     setAllProducts([...products])
    //   });
  }, [])

  const addProductInBasket = (product) => {
    // event.preventDefault()
    // event.stopPropagation()
    // console.log(product);
    // localStorage.setItem('basket', JSON.stringify(dispatch(addProduct(product))))
    dispatch(addProduct(product))
  }


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

  const filterProductsByMin = (priceFrom) => {
    const filteredProducts = defaultProducts.filter((product) => {
      return product.price > priceFrom
    })
    setAllProducts([...filteredProducts])
  }

  const filterProductsByMax = (priceTo) => {
    if (priceTo) {
      const filteredProducts = allProducts.filter((product) => { return product.price < priceTo });
      setTimeout(() => { setAllProducts([...filteredProducts]) }, 1500)
    }
  }


  return (
    <div className={styles.tools_container}>
      <p className={styles.rubric}>All products</p>

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
        <ViewProducts addProduct={addProductInBasket} allProducts={allProducts} />
      </div>
    </div>
  )
}

