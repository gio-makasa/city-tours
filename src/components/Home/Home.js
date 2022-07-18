import React from 'react'
import { TourData } from '../TourData'
import styles from './Home.module.css'

export default function Home(){
    return <div id='HomeSection' className={styles.HomeSection}>
    <h1 id={styles.title}>Tours Around the World</h1>
    <img className={styles.slide} src={TourData[5].img}/>
    <p id={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
}