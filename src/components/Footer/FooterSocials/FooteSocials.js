import React from 'react'
import styles from './FooterSocials.module.css'

export default function FooterSocials(){
    return (
        <div id={styles.Socials}>
        <h2 style={{textAlign: "center"}}>Socials</h2>
            <div className={styles.Social}><h3>Facebook: </h3><a href='/'>Link</a></div>
            <div className={styles.Social}><h3>Instagram: </h3><a href='/'>Link</a></div>
            <div className={styles.Social}><h3>Youtube: </h3><a href='/'>Link</a></div>
        </div>
    )
}