import React, { Component } from 'react'
import { getTrending } from '../../services/moviesApi'

export default class Home extends Component {

    state = {
        movies: []
    }

    componentDidMount() {
        getTrending().then(movies => { this.setState({ movies }) })

    }



    render() {
        const { movies } = this.state

        return (
            <div>
                <h3>Trending today</h3>
                <ul>
                    {movies.map(movie =>
                        <li key={movie.id}>{movie.title || movie.name}</li>)}

                </ul>

            </div>
        )
    }
}
