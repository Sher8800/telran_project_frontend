import React, { useState } from 'react'
import styles from './categories.module.css'

export default function CategoriesModule() {
  const API_URL = "http://localhost:3333/"
  const URL = 'http://localhost:3333/categories/all '

  const categoriesAll = []

  const [allCategories, setAllCategories] = useState(categoriesAll)

  fetch(URL)
    .then(response => response.json())
    .then(products => setAllCategories([...products]));

  return (
    <>
      <div className={styles.cotainer_categories}>
        {allCategories.map((product) => {
          return <div key={product.id} className={styles.container_img}>
            <div className={styles.img_text}>
              <div>
                <img className={styles.img_fertilizer} src={API_URL + product.image} alt="" />
              </div>
              <p className={styles.text}>{product.title}</p>
            </div>
          </div>
        })}
      </div>
    </>
  )
}


// <div className={styles.cotainer_categories}>

// <div className={styles.container_img}>
//   <div className={styles.img_text}>
//     <div className={styles.img_fertilizer}></div>
//     <p className={styles.text}>Fertilizer</p>
//   </div>
// </div>

// <div className={styles.container_img}>
//   <div className={styles.img_text}>
//     <div className={styles.img_protective_products}></div >
//     <p className={styles.text_long}>Protective products and septic tanks</p>
//   </div>
// </div>

// <div className={styles.container_img}>
//   <div className={styles.img_text}>
//     <div className={styles.img_planting_material}></div >
//     <p className={styles.text}>Planting material</p>
//   </div>
// </div>

// <Link to='/productsInCategories' className={styles.container_img}>
//   <div className={styles.img_text}>
//     <div className={styles.img_inventory}></div>
//     <p className={styles.text}>Tools and Inventory</p>
//   </div>
// </Link>

// <div className={styles.container_img}>
//   <div className={styles.img_text}>
//     <div className={styles.img_home_goods}></div>
//     <p className={styles.text}>Home Goods</p>
//   </div>
// </div>

// <div className={styles.container_img}>
//   <div className={styles.img_text}>
//     <div className={styles.img_pots_planters}></div>
//     <p className={styles.text}>Pots and planters</p>
//   </div>
// </div>

// <div className={styles.container_img}>
//   <div className={styles.img_text}>
//     <div className={styles.img_indoor_plants}></div>
//     <p className={styles.text}>For indoor plants</p>
//   </div>
// </div>

// <div className={styles.container_img}>
//   <div className={styles.img_text}>
//     <div className={styles.img_garden_figures}></div>
//     <p className={styles.text}>Garden figures</p>
//   </div>
// </div>

// </div >
