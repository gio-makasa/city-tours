import React from 'react'
import styles from './About.module.css'
import CommentsList from '../Comments/Comments'

export default function About() {
    return (
        <div id="AboutSection" className={styles.AboutSection}>
        <h1 style={{margin: "1rem"}}>About Us</h1>
        <span id={styles.title}>This Page is built using React.js</span>

        <div id={styles.text}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut tortor et leo semper porttitor a sit amet velit. Quisque tincidunt, risus ut egestas elementum, massa magna finibus nibh, a suscipit neque leo sit amet lorem. Nulla interdum ex auctor pellentesque auctor. Sed at neque facilisis, facilisis purus eget, lobortis orci. Cras faucibus lacus in ipsum gravida, eget hendrerit dolor dignissim. Nulla facilisi. Duis facilisis augue a molestie malesuada. Curabitur sit amet nulla vitae urna iaculis efficitur. Nam vitae tortor ut dui porttitor pellentesque eget eget ipsum. Phasellus placerat sagittis ante, sit amet bibendum risus placerat rutrum. Duis ac consectetur magna, quis pretium neque. In porta justo ac nulla efficitur, vitae faucibus tortor maximus. Aenean non elit pretium, cursus ante at, feugiat dolor.
            </p>
        </div>
        <CommentsList/>
        </div>
    )
}