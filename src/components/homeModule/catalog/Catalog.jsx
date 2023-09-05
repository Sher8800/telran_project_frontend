import React from 'react'
import styles from './Catalog.module.css'
import { API_URL } from '../../../config/api'
import { Link, NavLink } from 'react-router-dom'
import { useGetCategoriesQuery } from '../../../store/api/productApi'

const initProducts = [];

export default function Catalog() {

  const { data: allCotegories = initProducts } = useGetCategoriesQuery()

  return (
    <div className={styles.container}>

      <div className={styles.container_text_btn}>
        <p className={styles.page_title}>Catalog</p>
        <Link className={styles.btn} to="/categories">
          <p className={styles.btn_item_text} >All categories</p>
        </Link>
      </div>

      <div className={styles.container_categories}>
        {allCotegories.slice(0, 4).map((cotegorie) => (
          <NavLink key={cotegorie.id} to={'/productsInCategories'} state={{ id: cotegorie.id, title: cotegorie.title }} className={styles.container_categorie}>
            <img className={styles.img_cotegorie} src={API_URL + cotegorie.image} alt="cotegorie" />
            <p className={styles.cotegorie_title}>{cotegorie.title}</p>
          </NavLink>
        ))}
      </div>

    </div >
  )
}
