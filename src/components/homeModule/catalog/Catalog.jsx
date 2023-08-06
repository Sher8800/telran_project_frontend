import React, { useState } from 'react'
import styles from './catalog.module.css'
import { API_URL } from '../../../globalVariables/GlobalVariables'
import { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Catalog() {

  const URL = `${API_URL}categories/all`

  const [allCotegories, setAllCotegories] = useState([])

  useEffect(() => {
    fetch(URL)
      .then(response => response.json())
      .then(cotegories => setAllCotegories([...cotegories]))
  }, [])
  return (
    <div className={styles.container}>

      <div className={styles.container_text_btn}>
        <p className={styles.catalog}>Catalog</p>
        <Link className={styles.btn} to="/categories">
          <p className={styles.btn_item_text} >All categories</p>
        </Link>
      </div>

      <div className={styles.container_categories}>

        {allCotegories.map((cotegorie) => {
          return <NavLink key={cotegorie.id} to={'/productsInCategories'} state={{ id: cotegorie.id, title: cotegorie.title }} className={styles.container_categorie}>
            {cotegorie.id <= 4 ?
              <>
                <img className={styles.img_cotegorie} src={API_URL + cotegorie.image} alt="cotegorie" />
                <p className={styles.text}>{cotegorie.title}</p>
              </>
              : ''
            }
          </NavLink>
        })}

      </div>
    </div >
  )
}
