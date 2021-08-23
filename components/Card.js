import React from 'react'
import styles from "./Card.module.css"

const Card = ({bgColor, carImg, heading, para}) => {
    return (
        <div className={[styles.card, bgColor === "orange" ? styles.orange : bgColor === "cyan" ? styles.cyan : bgColor === "darkcyan" ? styles.darkCyan : null].join(" ")}>
            <img src={carImg} alt="" />
            <h1 className={styles.title}>{heading}</h1>
            <p className={styles.para}>{para}</p>
            <div className={styles.learnMore}>
                <p>Learn More</p>
            </div>
        </div>
    )
}

export default Card
