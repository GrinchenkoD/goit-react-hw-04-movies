import React from 'react'
import { NavLink } from "react-router-dom"
import styles from "./Header.module.css"

function Header() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/" className={styles.navLink} activeClassName={styles.activeNavLink}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/movies" className={styles.navLink} activeClassName={styles.activeNavLink}>Movies</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Header
