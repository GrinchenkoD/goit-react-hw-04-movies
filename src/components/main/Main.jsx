import React from 'react'
import { Route, } from "react-router-dom"
import HomePage from "../../pages/homePage"
import MovieDetailsPage from '../../pages/movieDetailsPage/MovieDetailsPage'
import MoviesPage from '../../pages/moviesPage/MoviesPage'

function Main() {
    return (
        <div>
            <Route exact path="/" component={HomePage} />
            <Route path="/movies/:movieId" component={MovieDetailsPage} />
            <Route exact path="/movies" component={MoviesPage} />

        </div>
    )
}

export default Main
