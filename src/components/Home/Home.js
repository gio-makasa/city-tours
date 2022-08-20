import React from 'react'
import { TourData } from '../TourData'
import styles from './Home.module.css'

export default function Home(){
    return <div id='HomeSection' className={styles.HomeSection}>
    <h1 id={styles.title}>City Tours</h1>
    <img className={styles.slide} src={TourData[5].img} alt='cover'/>
    <p id={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    </div>
}