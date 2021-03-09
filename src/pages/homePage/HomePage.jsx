import React, { Component } from 'react'
import { getTrending } from '../../services/moviesApi'

import styles from "./HomePage.module.css"

import MoviesList from '../../components/moviesList/MoviesList'

export default class HomePage extends Component {

    state = {
        movies: []
    }

    componentDidMount() {
        getTrending().then(movies => { this.setState({ movies }) })

    }



    render() {
        const { movies } = this.state

        return (
            <div className={styles.thumb}>
                <h2 className={styles.title}>Trending today</h2>
                {!!movies.length && <MoviesList movies={movies} />}
            </div>
        )
    }
}
