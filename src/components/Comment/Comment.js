import React from 'react'
import styles from './Comment.module.css'

export default function Comment(props) {
    const{rating,date,title,text,name} = props.comment;
    
    return (
        <div className={styles.comment}>
            <h2>{rating}/5</h2>
            <p>{date}</p>
            <h3 style={{marginTop: "1rem"}}>{title}</h3>
            <p>{text}</p>
            <h4 style={{marginTop: "1rem"}}>{name}</h4>
        </div>
    )
}