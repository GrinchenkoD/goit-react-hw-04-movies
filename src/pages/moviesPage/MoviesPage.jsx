import React, { Component } from 'react'

import { searchByName } from "../../services/moviesApi"
import styles from "./MoviesPage.module.css"
import MoviesList from '../../components/moviesList/MoviesList'

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
        if (!this.state.query) {
            return
        }
        // ===========================================
        this.props.history.push({
            pathname: this.props.location.pathname,
            search: `?query=${this.state.query}`
        })

    }

    render() {
        const { query, movies } = this.state;
        const { match } = this.props

        return (
            <>
                <form onSubmit={this.handleSubmit} className={styles.form}>
                    <input
                        type="text"
                        value={query}
                        onChange={this.handleChange}
                        className={styles.input}
                        placeholder="Enter movie name"
                    />
                    <button type="submit" className={styles.searchBtn} >Search</button>
                </form>
                {!!movies.length && <MoviesList movies={movies} url={match.url} query={query} />}
            </>
        )
    }
}
