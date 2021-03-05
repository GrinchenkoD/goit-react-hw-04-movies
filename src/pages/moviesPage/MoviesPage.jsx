import React, { Component } from 'react'
import MoviesList from '../../components/moviesList'
import { searchByName } from "../../services/moviesApi"

export default class MoviesPage extends Component {

    state = {
        query: '',
        movies: [],
    }

    componentDidUpdate(_prevProps, prevState) {
        if (prevState.movies !== this.state.movies) { }

    }

    handleChange = (event) => {
        const { value } = event.target
        this.setState((prevState) => ({ query: value }))
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { query } = this.state
        searchByName(query).then(movies => this.setState({ movies }))

    }

    render() {
        const { query, movies } = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="">
                    <input
                        type="text"
                        value={query}
                        onChange={this.handleChange}
                        autoFocus
                        className=""
                    />
                    <button type="submit">Search</button>
                </form>
                {!!movies.length && <MoviesList movies={movies} />}

            </div>
        )
    }
}
