import React, { Component } from 'react'
// import MoviesList from '../../components/moviesList'
import { searchByName } from "../../services/moviesApi"
import { Link } from "react-router-dom"

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
                {!!movies.length &&
                    <ul>
                        {movies.map(movie =>
                            <li key={movie.id}>
                                <Link to={{
                                    pathname: `${match.url}/${movie.id}`,
                                    state: {
                                        from: this.props.location.pathname,
                                        query: query
                                    }
                                }}>
                                    {movie.title || movie.name}
                                </Link>
                            </li>
                        )
                        }
                    </ul>}

            </div>
        )
    }
}
