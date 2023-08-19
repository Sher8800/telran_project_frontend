import React from 'react'
import styles from './Filtration.module.css'
import classNames from 'classnames'


export default function CheckBox({ className, ...props }) {
  return (
    <div className={styles.discount_container}>
      <label >
        <input {...props} type='checkbox' className={classNames(styles.real_checkbox, { [className]: className })} />
        Discounted items
        <span className={styles.fake_checkbox}></span>
      </label>
    </div>
  )
}
