import { useState } from 'react'
import styles from '../all_products.module.css'
import ProductsModule from '../../../productsModule/productsModule'


export default function FilterProducts({ filterProductsByMin, filterProductsByMax, priceFrom, priceTo }) {

  return (
    <div className={styles.price_container}>
      <span className={styles.text}>Price</span>
      <input onChange={filterProductsByMin} value={priceFrom} placeholder='from' className={styles.price_input} />
      <input onChange={filterProductsByMax} value={priceTo} placeholder='to' className={styles.price_input} />
    </div>
  )
}
