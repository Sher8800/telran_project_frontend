import { useState } from 'react'
import styles from './Filtration.module.css'
import ProductsModule from '../productModule/ProductModule'


export default function FilterProducts({ filterByMin, filterByMax, priceFrom, priceTo }) {

  return (
    <div className={styles.price_container}>
      <span className={styles.text}>Price</span>
      <input onChange={filterByMin} value={priceFrom} placeholder='from' className={styles.price_input} />
      <input onChange={filterByMax} value={priceTo} placeholder='to' className={styles.price_input} />
    </div>
  )
}
