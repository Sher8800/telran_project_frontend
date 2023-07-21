import React, { useState } from 'react'
import styles from './all_products.module.css'
import secateurs from '../../../assets/productsInCategories/secateurs.png'


export default function All_products() {

  const productsInitialState = [
    {
      name: 'as;dfk',
      newPrice: 2,
      oldPrice: 4,
      discount: 1,
      imgSrc: secateurs,
      id: 1,
    },

    {
      name: 'as;dfk',
      newPrice: 6,
      oldPrice: 5,
      discount: 2,
      imgSrc: secateurs,
      id: 2,
    },
    {
      name: 'as;dfk',
      newPrice: 9,
      oldPrice: 43,
      discount: 8,
      imgSrc: secateurs,
      id: 3,
    },
    {
      name: 'alk',
      newPrice: 0,
      oldPrice: 7,
      discount: 0,
      imgSrc: secateurs,
      id: 4,
    },
    {
      name: 'alk',
      newPrice: 0,
      oldPrice: 0,
      discount: 0,
      imgSrc: secateurs,
      id: 5,
    },
    {
      name: 'ppkop',
      newPrice: 0,
      oldPrice: 0,
      discount: 0,
      imgSrc: secateurs,
      id: 6,
    },
    {
      name: 'ppkop',
      newPrice: 0,
      oldPrice: 0,
      discount: 0,
      imgSrc: secateurs,
      id: 7,
    },
    {
      name: 'ppkop',
      newPrice: 0,
      oldPrice: 0,
      discount: 0,
      imgSrc: secateurs,
      id: 8,
    },
  ];

  const [products, setProducts] = useState(productsInitialState)

  const sortProducts = (event) => {
    console.log(event);
    switch (event.target.value) {

      case 'highter':
        products.sort((a, b) => {
          return a.newPrice - b.newPrice
        })
        setProducts([...products])
        break;

      case 'lower':
        products.sort((a, b) => {
          return b.newPrice - a.newPrice
        })
        setProducts([...products])
        break;

      default: setProducts([...productsInitialState])
        break;
    }
  }




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
            <select onChange={event => sortProducts(event)} className={styles.sort_select}>
              <option className={styles.sort_option} value="default">By default</option>
              <option className={styles.sort_option} value="highter">By highter price </option>
              <option className={styles.sort_option} value="lower">By lower price</option>
            </select>
          </span>
        </div>

      </div>

      <div className={styles.products_container}>

        {products.map((product) => {

          return <div key={product.id} className={styles.product_container}>
            <div >
              <img className={styles.img_secateurs} src={product.imgSrc} alt="" />
            </div>
            <div className={styles.product_description}>
              <div className={styles.container_price}>
                <p className={styles.new_price}>{product.newPrice}</p>
                <p className={styles.old_price}>{product.oldPrice}</p>
                <p className={styles.discount}>{product.discount}</p>
              </div>
              <p className={styles.name_product}>{product.name}</p>
            </div>
          </div>

        })}



      </div>
    </div>
  )
}


{/* <div className={styles.tools_container}>
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
              <option className={styles.sort_option} value="default">By default</option>
              <option className={styles.sort_option} value="highter">By highter price </option>
              <option className={styles.sort_option} value="lower">By lower price</option>
            </select>
          </span>
        </div>

      </div>

      <div className={styles.products_container}>

        <div className={styles.product_container}>
          <div className={styles.img_secateurs}>
            <img src="" alt="" />
          </div>
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
    </div> */}