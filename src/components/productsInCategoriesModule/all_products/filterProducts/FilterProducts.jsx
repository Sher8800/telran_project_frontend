import { useState } from 'react'
import styles from '../all_products.module.css'
import ProductsModule from '../../../productsModule/productsModule'


export default function FilterProducts({ filterProductsByMin, filterProductsByMax }) {
  const [priceFrom, setPriceFrom] = useState('')
  const [priceTo, setPriceTo] = useState(1000)

  return (
    <>
      <div className={styles.price_container}>
        <span className={styles.text}>Price</span>
        <input onChange={(event) => {
          setPriceFrom(event.target.value)
          filterProductsByMin(event.target.value)
        }} placeholder='from' className={styles.price_input}></input>
        <input onChange={(event) => {
          setPriceTo(event.target.value)
          filterProductsByMax(event.target.value)
        }} placeholder='to' className={styles.price_input}></input>
      </div>
    </>
  )
}
