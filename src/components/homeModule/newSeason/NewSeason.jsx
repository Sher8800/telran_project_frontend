import React from 'react'
import styles from './NewSeason.module.css'
import { Link } from 'react-router-dom'


export default function NewSeason() {
  return (
    <div className={styles.container}>
      <div className={styles.container_text_btn}>
        <p className={styles.sale}>Sale</p>
        <p className={styles.new_season}>New season</p>
        <Link to={"/sale"} className={styles.btn}>Sale</Link>
      </div>
    </div>
  )
}
