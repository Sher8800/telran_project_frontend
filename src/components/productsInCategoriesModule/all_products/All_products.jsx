import React from 'react'
import styles from './all_products.module.css'

export default function All_products() {
  return (
    <div className={styles.tools_container}>
      <p className={styles.rubric}>All products</p>

      <div className={styles.form_container}>

        <div className={styles.price_container}>
          <span className={styles.text}>Price</span>
          <input placeholder='from' className={styles.price_input}></input>
          <input placeholder='to' className={styles.price_input}></input>
        </div>

        <div className={styles.discount_container}>
          <span className={styles.text}>Discounted items</span>
          <span>
            <input type='checkbox' className={styles.discount_checkbox}></input>
          </span>
        </div>

        <div className={styles.sort_container}>
          <span className={styles.text}>Sorted</span>
          <span>
            <select className={styles.sort_select}>
              <option className={styles.sort_option} value="by default">by default</option>
              <option className={styles.sort_option} value="default">default</option>
              <option className={styles.sort_option} value="">by</option>
            </select>
          </span>
        </div>

      </div>

      <div className={styles.products_container}>

        <div className={styles.product_container}>
          <div className={styles.img_secateurs}></div>
          <div className={styles.product_description}>
            <div className={styles.container_price}>
              <p className={styles.new_price}>199$</p>
              <p className={styles.old_price}>250$</p>
              <p className={styles.discount}>-7%</p>
            </div>
            <p className={styles.name_product}>Secateurs</p>
          </div>
        </div>

        <div className={styles.product_container}>
          <div className={styles.img_collection_for_berries}></div>
          <div className={styles.product_description}>
            <div className={styles.container_price}>
              <p className={styles.new_price}>199$</p>
              <p className={styles.old_price}>250$</p>
              <p className={styles.discount}>-7%</p>
            </div>
            <p className={styles.name_product}>Collection for berries (plastic)</p>
          </div>
        </div>

        <div className={styles.product_container}>
          <div className={styles.img_gloves}></div>
          <div className={styles.product_description}>
            <div className={styles.container_price}>
              <p className={styles.new_price}>199$</p>
              <p className={styles.old_price}>250$</p>
              <p className={styles.discount}>-7%</p>
            </div>
            <p className={styles.name_product}>Gloves (black)</p>
          </div>
        </div>

        <div className={styles.product_container}>
          <div className={styles.img_hacksaw}></div>
          <div className={styles.product_description}>
            <div className={styles.container_price}>
              <p className={styles.new_price}>199$</p>
              <p className={styles.old_price}>250$</p>
              <p className={styles.discount}>-7%</p>
            </div>
            <p className={styles.name_product}>sickle-shaped hacksaw</p>
          </div>
        </div>

        <div className={styles.product_container}>
          <div className={styles.img_shovel}></div>
          <div className={styles.product_description}>
            <div className={styles.container_price}>
              <p className={styles.new_price}>199$</p>
              <p className={styles.old_price}>250$</p>
              <p className={styles.discount}>-7%</p>
            </div>
            <p className={styles.name_product}>bayonet shovel</p>
          </div>
        </div>

        <div className={styles.product_container}>
          <div className={styles.img_pitchfork}></div>
          <div className={styles.product_description}>
            <div className={styles.container_price}>
              <p className={styles.new_price}>199$</p>
              <p className={styles.old_price}>250$</p>
              <p className={styles.discount}>-7%</p>
            </div>
            <p className={styles.name_product}>garden pitchfork</p>
          </div>
        </div>

        <div className={styles.product_container}>
          <div className={styles.img_barbell}></div>
          <div className={styles.product_description}>
            <div className={styles.container_price}>
              <p className={styles.new_price}>199$</p>
              <p className={styles.old_price}>250$</p>
              <p className={styles.discount}>-7%</p>
            </div>
            <p className={styles.name_product}>Barbell</p>
          </div>
        </div>

        <div className={styles.product_container}>
          <div className={styles.img_thermometer}></div>
          <div className={styles.product_description}>
            <div className={styles.container_price}>
              <p className={styles.new_price}>199$</p>
              <p className={styles.old_price}>250$</p>
              <p className={styles.discount}>-7%</p>
            </div>
            <p className={styles.name_product}>souvenir thermometer</p>
          </div>
        </div>

      </div>
    </div>
  )
}
