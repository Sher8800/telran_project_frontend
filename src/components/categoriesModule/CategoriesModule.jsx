import React from 'react'
import styles from './Categories.module.css'
import { API_URL } from '../../config/api'
import { NavLink } from 'react-router-dom'
import { useGetCategoriesQuery } from '../../store/api/productApi'


const initProducts = [];

export default function CategoriesModule() {

  const { data: allCategories = initProducts } = useGetCategoriesQuery()

  return (
    <div className={styles.cotainer}>
      <p className={styles.page_title}>Categories</p>
      <div className={styles.container_categories}>
        {allCategories.map((cotegorie) => (
          <NavLink to={'/productsInCategories'} state={{ id: cotegorie.id, title: cotegorie.title }} key={cotegorie.id} className={styles.container_categorie}>
            <img className={styles.img_categorie} src={API_URL + cotegorie.image} alt="product" />
            <p className={styles.cotegorie_title}>{cotegorie.title}</p>
          </NavLink>
        ))}
      </div>
    </div>
  )
}



