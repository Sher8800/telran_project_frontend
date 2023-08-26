import React, { useEffect, useState } from 'react'
import styles from './BackToTopButton.module.css'
import Button from '../Button';

export default function BackToTopButton() {

  const [backToTopButton, setBackToTopButton] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        setBackToTopButton(true)
      } else {
        setBackToTopButton(false)
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div>
      < button onClick={scrollUp} className={!backToTopButton ? `${styles.button_top} ${styles.button_top_active}` : styles.button_top_active}>^</button>
    </div>
  )
}
