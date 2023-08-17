import React from 'react'
import styles from './Filtration.module.css'
import classNames from 'classnames'


export default function CheckBox({ className, ...props }) {
  return (
    <div className={styles.discount_container}>
      <span className={styles.text}>Discounted items</span>
      <input {...props} type='checkbox' className={classNames(styles.checkbox, { [className]: className })} />
    </div>
  )
}