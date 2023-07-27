import React from 'react'
import styles from '../all_products.module.css'

export default function ViewProducts({ products, allProducts }) {
  const API_URL = "http://localhost:3333/"
  return (
    <>
      {allProducts.map((product) => {
        // console.log(product.img);

        return <div key={product.id} className={styles.product_container}>
          <div >
            <img className={styles.img_secateurs} src={API_URL + product.image} alt="" />
          </div>
          <div className={styles.product_description}>
            <div className={styles.container_price}>
              <p className={styles.new_price}>{product.price + '$'}</p>
              <p className={styles.old_price}>{234}</p>
              <p className={styles.discount}>{product.discont_price + '%'}</p>
            </div>
            <p className={styles.name_product}>{product.title}</p>
          </div>
        </div>

      })}
    </>
  )
}



// {allProducts.map((product) => {
//   console.log(product);

//   return <div key={product.id} className={styles.product_container}>
//     <div >
//       <img className={styles.img_secateurs} src={product.imgSrc} alt="" />
//     </div>
//     <div className={styles.product_description}>
//       <div className={styles.container_price}>
//         <p className={styles.new_price}>{product.newPrice}</p>
//         <p className={styles.old_price}>{product.oldPrice}</p>
//         <p className={styles.discount}>{product.discount}</p>
//       </div>
//       <p className={styles.name_product}>{product.name}</p>
//     </div>
//   </div>

// })}