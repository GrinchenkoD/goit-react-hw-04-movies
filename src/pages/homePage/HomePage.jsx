import React, { Component } from 'react'
import { getTrending } from '../../services/moviesApi'
import { Link } from "react-router-dom"
import styles from "./HomePage.module.css"
import placeholder from "../../images/placeholder.png"

export default class HomePage extends Component {

    state = {
        movies: []
    }

    componentDidMount() {
        getTrending().then(movies => { this.setState({ movies }) })

    }



    render() {
        const { movies } = this.state
        // const { match } = this.props
        // backdrop_path
        const baseImgUrl = "https://image.tmdb.org/t/p/w500"
        return (
            <div className={styles.thumb}>
                <h2 className={styles.title}>Trending today</h2>
                {!!movies.length &&
                    <ul className={styles.list}>
                        {movies.map(movie =>
                            <li key={movie.id} className={styles.item} >
                                <Link to={`movies/${movie.id}`} className={styles.link}>
                                    <img src={movie.poster_path ? `${baseImgUrl}${movie.poster_path}` : placeholder}
                                        alt="movie poster" className={styles.poster} />
                                    <div className={styles.textTumb}>
                                        <p className={styles.name}>
                                            {movie.title || movie.name}
                                        </p>
                                    </div>
                                </Link>
                            </li>)}
                    </ul>}


            </div>
        )
    }
}
