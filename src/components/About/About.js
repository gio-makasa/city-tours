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
            <p>Mauris eget augue nec justo lobortis aliquet a eget ligula. Nam ornare scelerisque bibendum. Aliquam erat volutpat. Vivamus enim diam, tempus eu iaculis sit amet, vulputate in tortor. Aliquam rutrum eget diam ut dapibus. Integer et blandit nunc. Sed metus lectus, imperdiet et tincidunt hendrerit, ultricies nec nulla. Vestibulum malesuada egestas turpis, et semper sem scelerisque non. Sed accumsan eget sapien nec suscipit. Etiam non dignissim nibh, in consectetur quam. Phasellus varius, elit vel mollis dapibus, erat justo faucibus magna, vel scelerisque metus lacus vel arcu. Nunc arcu velit, scelerisque ac diam in, euismod tristique sem. Pellentesque sed mollis augue, ut interdum metus. Phasellus vitae velit arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut tortor et leo semper porttitor a sit amet velit. Quisque tincidunt, risus ut egestas elementum, massa magna finibus nibh, a suscipit neque leo sit amet lorem. Nulla interdum ex auctor pellentesque auctor. Sed at neque facilisis, facilisis purus eget, lobortis orci. Cras faucibus lacus in ipsum gravida, eget hendrerit dolor dignissim. Nulla facilisi. Duis facilisis augue a molestie malesuada. Curabitur sit amet nulla vitae urna iaculis efficitur. Nam vitae tortor ut dui porttitor pellentesque eget eget ipsum. Phasellus placerat sagittis ante, sit amet bibendum risus placerat rutrum. Duis ac consectetur magna, quis pretium neque. In porta justo ac nulla efficitur, vitae faucibus tortor maximus. Aenean non elit pretium, cursus ante at, feugiat dolor.
            </p>
            <p>Mauris eget augue nec justo lobortis aliquet a eget ligula. Nam ornare scelerisque bibendum. Aliquam erat volutpat. Vivamus enim diam, tempus eu iaculis sit amet, vulputate in tortor. Aliquam rutrum eget diam ut dapibus. Integer et blandit nunc. Sed metus lectus, imperdiet et tincidunt hendrerit, ultricies nec nulla. Vestibulum malesuada egestas turpis, et semper sem scelerisque non. Sed accumsan eget sapien nec suscipit. Etiam non dignissim nibh, in consectetur quam. Phasellus varius, elit vel mollis dapibus, erat justo faucibus magna, vel scelerisque metus lacus vel arcu. Nunc arcu velit, scelerisque ac diam in, euismod tristique sem. Pellentesque sed mollis augue, ut interdum metus. Phasellus vitae velit arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            </p>
        </div>
        <CommentsList/>
        </div>
    )
}