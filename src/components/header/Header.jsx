import React from 'react'
import { NavLink } from "react-router-dom"

function Header() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/" className="navLink" activeClassName='activeNavLink'>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/movies" className="navLink" activeClassName='activeNavLink'>Movies</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Header
