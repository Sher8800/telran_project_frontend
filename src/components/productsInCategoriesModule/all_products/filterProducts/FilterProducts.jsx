import { useState } from 'react'
import styles from '../all_products.module.css'
import ProductsModule from '../../../productsModule/productsModule'


export default function FilterProducts({ filterProducts }) {
  const [priceFrom, setPriceFrom] = useState('')
  const [priceTo, setPriceTo] = useState('')

  return (
    <>
      <div className={styles.price_container}>
        <span className={styles.text}>Price</span>
        <input onChange={(event) => {
          setPriceFrom(event.target.value)
          filterProducts(priceFrom, priceTo)
        }} placeholder='from' className={styles.price_input}></input>
        <input onChange={(event) => {
          setPriceTo(event.target.value)
          filterProducts(priceFrom, priceTo)
        }} placeholder='to' className={styles.price_input}></input>
      </div>
    </>
  )
}
