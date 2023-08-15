import React from 'react'
import styles from './CheckBox.module.css'
import classNames from 'classnames'


export default function CheckBox({ className, ...props }) {
  return (
    <input {...props} type='checkbox' className={classNames(styles.checkbox, { [className]: className })} />
  )
}
