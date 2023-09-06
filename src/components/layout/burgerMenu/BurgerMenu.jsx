import React from 'react'
import styles from './BurgerMenu.module.css'
import { NavLink } from 'react-router-dom'
import useWindowSize from '../../../hooks/useWindowSize';
import imgDelete from '../../../images/basket/delete.png';

const links = [
  {
    label: 'Main Page',
    link: '',
  },
  {
    label: 'All products',
    link: '/allProducts',
  },
  {
    label: 'All sales',
    link: '/allSales',
  }
]

export default function BurgerMenu({ setClick }) {

  const { width } = useWindowSize();

  const closeLinks = () => {
    setClick(false)
  }

  return (
    <div className={styles.container}>
      <div className={styles.links_container}>
        {width < 768 ? links.map(({ label, link }) => (
          <NavLink key={link} className={styles.link} to={link}>{label}</NavLink>
        ))
          : ''}
      </div>
      <img onClick={closeLinks} className={styles.img_delete} src={imgDelete} alt='icon' />
    </div>
  )
}
