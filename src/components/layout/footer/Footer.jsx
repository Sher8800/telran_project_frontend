import React from 'react'
import styles from './Footer.module.css'
import instagram from '../../../images/footer/instagram.png'
import whatsApp from '../../../images/footer/whatsapp.png'

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
          <a className={styles.address} href="https://goo.gl/maps/JKDi9yq6zD2khhYD7">
            <p>Linkstraße 2, 8 OG, 10785,</p>
            <p>Berlin, Deutschland</p>
          </a>
          <p className={styles.work_time}>Working Hours:</p>
          <p className={styles.time}>24 hours a day</p>
        </div>
      </div>

      <iframe className={styles.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16337.909716636532!2d13.360823980588924!3d52.503668845005535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851cbdd6cfe0f%3A0xb4b0903f299decf1!2sLinkstra%C3%9Fe%202%2F8.%20Etage%2C%2010785%20Berlin!5e0!3m2!1sru!2sde!4v1693068421636!5m2!1sru!2sde" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
      </iframe>

    </footer>
  )
}
