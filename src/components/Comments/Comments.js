import React from 'react'
import styles from './Comments.module.css'
import Comment from '../Comment/Comment.js'
import { CommentData } from '../CommentData'

export default function CommentsList() {
    const comments = CommentData;
    return (
        <div className={styles.CommentsSection}>
            <h1 style={{textAlign: "center"}}>Comments</h1>
            <section id={styles.Comments}>
                {comments.map(comment =>{
                    return <Comment key={comment.Id} comment={comment} />
                })}
            </section>
        </div>
    )
}