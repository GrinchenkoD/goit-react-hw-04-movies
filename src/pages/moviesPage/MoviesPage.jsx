import React, { Component } from 'react'
// import MoviesList from '../../components/moviesList'
import { searchByName } from "../../services/moviesApi"
import { Link } from "react-router-dom"
import styles from "./MoviesPage.module.css"
import placeholder from "../../images/placeholder.png"

export default class MoviesPage extends Component {

    state = {
        query: '',
        movies: [],
    }

    componentDidMount() {
        if (this.props.location.search) {
            const urlString = window.location.href;
            const url = new URL(urlString);
            const query = url.searchParams.get("query");

            this.setState({ query: query })
            searchByName(query).then(movies => this.setState({ movies }))
        }
    }

    componentDidUpdate(prevProps,) {

        if (prevProps.location.search !== this.props.location.search) {

            const { query } = this.state
            searchByName(query).then(movies => this.setState({ movies }))
        }

    }

    handleChange = (event) => {
        const { value } = event.target
        this.setState((prevState) => ({ query: value }))
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // ===========================================
        this.props.history.push({
            pathname: this.props.location.pathname,
            search: `?query=${this.state.query}`
        })

    }

    render() {
        const { query, movies } = this.state;
        const { match } = this.props
        const baseImgUrl = "https://image.tmdb.org/t/p/w500"

        return (
            <>
                <form onSubmit={this.handleSubmit} className={styles.form}>
                    <input
                        type="text"
                        value={query}
                        onChange={this.handleChange}
                        autoFocus
                        className={styles.input}
                        placeholder="Enter movie name"
                    />
                    <button type="submit" className={styles.searchBtn} >Search</button>
                </form>
                {!!movies.length &&
                    <ul className={styles.list}>
                        {movies.map(movie =>
                            <li key={movie.id} className={styles.item}>
                                <Link to={{
                                    pathname: `${match.url}/${movie.id}`,
                                    state: {
                                        from: this.props.location.pathname,
                                        query: query
                                    }
                                }} className={styles.link}>

                                    <img src={movie.poster_path ? `${baseImgUrl}${movie.poster_path}` : placeholder}
                                        alt="movie poster" className={styles.poster} />
                                    <div className={styles.textTumb}>
                                        <p className={styles.name}>
                                            {movie.title || movie.name}
                                        </p>
                                    </div>

                                </Link>
                            </li>
                        )
                        }
                    </ul>}

            </>
        )
    }
}
