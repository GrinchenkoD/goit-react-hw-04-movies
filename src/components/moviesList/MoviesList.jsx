import React from 'react'
import styles from "./MoviesList.module.css"
import { Link } from "react-router-dom"
import placeholder from "../../images/placeholder.png"

const baseImgUrl = "https://image.tmdb.org/t/p/w500"

const MoviesList = ({ movies, url = "/movies" }) => {
    return (
        <ul className={styles.list}>
            {movies.map(movie =>
                <li key={movie.id} className={styles.item} >
                    <Link to={`${url}/${movie.id}`} className={styles.link}>
                        <img src={movie.poster_path ? `${baseImgUrl}${movie.poster_path}` : placeholder}
                            alt="movie poster" className={styles.poster} />
                        <div className={styles.textTumb}>
                            <p className={styles.name}>
                                {movie.title || movie.name}
                            </p>
                        </div>
                    </Link>
                </li>)}
        </ul>
    )
}

export default MoviesList
