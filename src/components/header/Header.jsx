import React from 'react'
import { NavLink } from "react-router-dom"
import styles from "./Header.module.css"

function Header() {
    return (
        <nav className={styles.nav}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <NavLink to="/" className={styles.navLink} activeClassName={styles.activeNavLink}>HOME</NavLink>
                </li>
                <li>
                    <NavLink to="/movies" className={styles.navLink} activeClassName={styles.activeNavLink}>MOVIES</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Header
