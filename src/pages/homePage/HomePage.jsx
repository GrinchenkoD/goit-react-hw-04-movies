import React, { Component } from 'react'
import { getTrending } from '../../services/moviesApi'
import { Link } from "react-router-dom"

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

        return (
            <div>
                <h3>Trending today</h3>
                {!!movies.length &&
                    <ul>
                        {movies.map(movie =>
                            <li key={movie.id}>
                                <Link to={`movies/${movie.id}`}>
                                    {movie.title || movie.name}
                                </Link>
                            </li>)}
                    </ul>}


            </div>
        )
    }
}
