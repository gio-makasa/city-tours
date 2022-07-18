import React from 'react'
import styles from './FooterContacts.module.css'

export default function FooterContacts(){
    return (
        <div id={styles.contacts}>
            <h2 style={{textAlign: "center"}}>Contacts</h2>
            <div className={styles.contact}><h3>Phone number: </h3><h3>XXX-XX-XX-XX</h3></div>
            <div className={styles.contact}><h3>e-mail: </h3><h3>tester@tester.com</h3></div>
            <div className={styles.contact}><h3>Address: </h3><h3>tester N8</h3></div>
        </div>
    )
}