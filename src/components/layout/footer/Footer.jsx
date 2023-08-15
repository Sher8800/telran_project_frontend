import React from 'react'
import styles from './Footer.module.css'
import instagram from '../../../assets/footer/instagram.png'
import whatsApp from '../../../assets/footer/whatsapp.png'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container_info}>

        <div className={styles.container_contact}>
          <p className={styles.contact}>Contact</p>
          <p className={styles.phone_number}>+49 999 999 99 99</p>
          <div className={styles.container_icons}>
            <span className={styles.container_instagram}>
              <img src={instagram} alt="icon instagram" />
              <span>instagram</span>
            </span>
            <span className={styles.container_whatsApp}>
              <img src={whatsApp} alt="icon whatsApp" />
              <span>WhatsApp</span>
            </span>
          </div>
        </div>
        <div className={styles.container_address} >
          <div className={styles.text_address}>Address</div>
          <a className={styles.address} href="#">
            <div>Linkstraße 2, 8 OG, 10785,</div>
            <div>Berlin, Deutschland</div>
          </a>
          <div className={styles.work_time}>Working Hours:</div>
          <div className={styles.time}>24 hours a day</div>
        </div>
      </div>

      <div className={styles.img_google_map}>
      </div>

    </footer>
  )
}
