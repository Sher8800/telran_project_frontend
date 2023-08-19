import React from 'react'
import styles from './Filtration.module.css'

export default function SortProducts({ sortProducts, sortMode }) {

  return (
    <div className={styles.sort_container}>
      <span className={styles.text}>Sorted</span>
      <span>
        <select onChange={sortProducts} value={sortMode} className={styles.sort_select}>
          <option className={styles.sort_option} value="default">By default</option>
          <option className={styles.sort_option} value="higher">By higher price </option>
          <option className={styles.sort_option} value="lower">By lower price</option>
        </select>
      </span>
    </div>

  )
}
