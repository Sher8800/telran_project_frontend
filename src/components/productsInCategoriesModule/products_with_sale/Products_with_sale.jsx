import React, { useState, useEffect } from 'react'
import styles from './products_with_sale.module.css'
import SortProducts from '../all_products/sortProducts/SortProducts';
import FilterProducts from '../all_products/filterProducts/FilterProducts';
import { useLocation } from 'react-router-dom';
import { API_URL } from '../../../globalVariables/GlobalVariables';

export default function Products_with_sale() {

  const [allProducts, setAllProducts] = useState([]);
  const [defaultProducts, setDefaultProducts] = useState([]);

  // const location = useLocation;
  // const { state } = location;

  const URL = `${API_URL}products/all`

  useEffect(() => {
    fetch(URL)
      .then(response => response.json())
      .then(products => { setAllProducts([...products]); setDefaultProducts([...products]) });
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

  const filterProductsByMin = (priceFrom) => {
    const filteredProducts = defaultProducts.filter((product) => {
      return product.price > priceFrom
    })
    setAllProducts([...filteredProducts])
  }

  const filterProductsByMax = (priceTo) => {
    const filteredProducts = defaultProducts.filter((product) => {
      return product.price < priceTo
    })
    setAllProducts([...filteredProducts])
  }

  return (
    <div className={styles.tools_container}>
      <p className={styles.rubric}>Products with sale</p>

      <div className={styles.form_container}>

        <FilterProducts filterProductsByMin={filterProductsByMin} filterProductsByMax={filterProductsByMax} />

        <div className={styles.sort_container}>
          <span className={styles.text}>Sorted</span>
          <span>
            <SortProducts sortProducts={sortProducts} />
          </span>
        </div>

      </div>

      <div className={styles.products_container}>

        {allProducts.map((product) => {
          return <div key={product.id}>
            {product.discont_price ?
              <div className={styles.product_container}>
                <img className={styles.img_product} src={API_URL + product.image} alt="product" />
                <div className={styles.product_description}>
                  <div className={styles.container_price}>
                    <p className={styles.new_price}>{product.price}<span className={styles.price_dollar}>$</span></p>
                    <p className={styles.old_price}>{Math.ceil(product.price / (1 - (product.discont_price / 100))) + '$'}</p>
                    <p className={styles.discount}>{product.discont_price + '%'}</p>
                  </div>
                  <p className={styles.name_product}>Secateurs</p>
                </div>
              </div>
              : ''
            }
          </div>
        })}

      </div>
    </div>
  )
}

{/* <div className={styles.tools_container}>
      <p className={styles.rubric}>Products with sale</p>

      <div className={styles.form_container}>

        <div className={styles.price_container}>
          <span className={styles.text}>Price</span>
          <input placeholder='from' className={styles.price_input}></input>
          <input placeholder='to' className={styles.price_input}></input>
        </div>

        <div className={styles.sort_container}>
          <span className={styles.text}>Sorted</span>
          <span>
            <select className={styles.sort_select}>
              <option className={styles.sort_option} value="by default">by default</option>
              <option className={styles.sort_option} value="default">default</option>
              <option className={styles.sort_option} value="">by</option>
            </select>
          </span>
        </div>

      </div>

      <div className={styles.products_container}>

        <div className={styles.product_container}>
          <div className={styles.img_secateurs}></div>
          <div className={styles.product_description}>
            <div className={styles.container_price}>
              <p className={styles.new_price}>199$</p>
              <p className={styles.old_price}>250$</p>
              <p className={styles.discount}>-7%</p>
            </div>
            <p className={styles.name_product}>Secateurs</p>
          </div>
        </div>

        <div className={styles.product_container}>
          <div className={styles.img_collection_for_berries}></div>
          <div className={styles.product_description}>
            <div className={styles.container_price}>
              <p className={styles.new_price}>199$</p>
              <p className={styles.old_price}>250$</p>
              <p className={styles.discount}>-7%</p>
            </div>
            <p className={styles.name_product}>Collection for berries (plastic)</p>
          </div>
        </div>

        <div className={styles.product_container}>
          <div className={styles.img_gloves}></div>
          <div className={styles.product_description}>
            <div className={styles.container_price}>
              <p className={styles.new_price}>199$</p>
              <p className={styles.old_price}>250$</p>
              <p className={styles.discount}>-7%</p>
            </div>
            <p className={styles.name_product}>Gloves (black)</p>
          </div>
        </div>

        <div className={styles.product_container}>
          <div className={styles.img_hacksaw}></div>
          <div className={styles.product_description}>
            <div className={styles.container_price}>
              <p className={styles.new_price}>199$</p>
              <p className={styles.old_price}>250$</p>
              <p className={styles.discount}>-7%</p>
            </div>
            <p className={styles.name_product}>sickle-shaped hacksaw</p>
          </div>
        </div>

        <div className={styles.product_container}>
          <div className={styles.img_shovel}></div>
          <div className={styles.product_description}>
            <div className={styles.container_price}>
              <p className={styles.new_price}>199$</p>
              <p className={styles.old_price}>250$</p>
              <p className={styles.discount}>-7%</p>
            </div>
            <p className={styles.name_product}>bayonet shovel</p>
          </div>
        </div>

        <div className={styles.product_container}>
          <div className={styles.img_pitchfork}></div>
          <div className={styles.product_description}>
            <div className={styles.container_price}>
              <p className={styles.new_price}>199$</p>
              <p className={styles.old_price}>250$</p>
              <p className={styles.discount}>-7%</p>
            </div>
            <p className={styles.name_product}>garden pitchfork</p>
          </div>
        </div>

        <div className={styles.product_container}>
          <div className={styles.img_barbell}></div>
          <div className={styles.product_description}>
            <div className={styles.container_price}>
              <p className={styles.new_price}>199$</p>
              <p className={styles.old_price}>250$</p>
              <p className={styles.discount}>-7%</p>
            </div>
            <p className={styles.name_product}>Barbell</p>
          </div>
        </div>

        <div className={styles.product_container}>
          <div className={styles.img_thermometer}></div>
          <div className={styles.product_description}>
            <div className={styles.container_price}>
              <p className={styles.new_price}>199$</p>
              <p className={styles.old_price}>250$</p>
              <p className={styles.discount}>-7%</p>
            </div>
            <p className={styles.name_product}>souvenir thermometer</p>
          </div>
        </div>

      </div>
    </div> */}
