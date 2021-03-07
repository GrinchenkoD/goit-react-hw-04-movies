import React from 'react'
import { Route, Switch, } from "react-router-dom"
import HomePage from "../../pages/homePage"
import MovieDetailsPage from '../../pages/movieDetailsPage/MovieDetailsPage'
import MoviesPage from '../../pages/moviesPage/MoviesPage'
import NotFound from '../../pages/notFound'

function Main() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/movies/:movieId" component={MovieDetailsPage} />
                <Route exact path="/movies" component={MoviesPage} />
                <Route component={NotFound} />
            </Switch>
        </div>
    )
}

export default Main
