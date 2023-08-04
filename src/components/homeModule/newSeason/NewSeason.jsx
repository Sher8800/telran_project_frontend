import React from 'react'
import styles from './newSeason.module.css'
import { Link } from 'react-router-dom'


export default function NewSeason() {
  return (
    <div className={styles.container}>
      <div className={styles.container_text_btn}>
        <div className={styles.container_text}>
          <p className={styles.sale}>Sale</p>
          <p className={styles.new_season}>New season</p>
        </div>
        <Link to={"/sale"} className={styles.btn}>Sale</Link>
      </div>
      <div className={styles.garden_flowers}></div>
    </div>
  )
}
