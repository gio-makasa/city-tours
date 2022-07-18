import React from 'react'
import styles from './Footer.module.css'
import FooterContacts from './FooterContacts/FooterContacts'
import FooterSocials from './FooterSocials/FooteSocials'

export default function Footer(){
    return (
        <div id={styles.footer}>
            <FooterContacts/>
            <FooterSocials/>
            <FooterContacts/>
        </div>
    )
}