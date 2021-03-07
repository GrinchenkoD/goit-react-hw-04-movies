import React, { Component } from 'react'
import { Link } from "react-router-dom"

class MoviesList extends Component {

    render() {
        const { movies, } = this.props;
        console.log(this.props)
        return (
            <div>
                {!!movies.length &&
                    <ul>
                        {movies.map(movie =>
                            <li key={movie.id}>
                                <Link to={`movies/${movie.id}`}>
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

export default MoviesList
