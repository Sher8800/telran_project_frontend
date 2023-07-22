import React from 'react'
import styles from '../all_products.module.css'

export default function SortProducts({ sortProducts }) {

  return (
    <>
      <select onChange={event => sortProducts(event)} className={styles.sort_select}>
        <option className={styles.sort_option} value="default">By default</option>
        <option className={styles.sort_option} value="highter">By highter price </option>
        <option className={styles.sort_option} value="lower">By lower price</option>
      </select>
    </>
  )
}
