import React from 'react'
import { Route, Link } from "react-router-dom"
import Home from "../home"

function Main() {
    return (
        <div>
            <Route exact path="/" component={Home} />

        </div>
    )
}

export default Main
