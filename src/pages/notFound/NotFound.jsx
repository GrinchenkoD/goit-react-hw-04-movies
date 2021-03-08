import React from 'react'
import styles from "./NotFound.module.css"

const NotFound = () => {

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>404 Not found</h2>
            <p className={styles.text}>Ooops! Something goes wrong</p>
        </div>
    )
}

export default NotFound
