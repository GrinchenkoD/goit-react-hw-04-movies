import React, { Component } from 'react'
import { searchCast } from '../../services/moviesApi';
import placeholder from "../../images/placeholder.png"



export default class Cast extends Component {
    state = {
        cast: []
    }

    componentDidMount() {
        const { movieId } = this.props;
        searchCast(movieId).then(cast => this.setState({ cast: [...cast] }))
    }



    render() {

        const { cast } = this.state;
        const baseImgUrl = "https://image.tmdb.org/t/p/original";


        return (
            <div>
                <h2>Cast</h2>

                {cast.map((actor) => {

                    return (<div key={actor.id} >
                        <img src={actor.profile_path ? `${baseImgUrl}${actor.profile_path}` : placeholder}
                            alt={` ${actor.name} `} width="100" />
                        <h3>{actor.name}</h3>
                        <p>Character: {actor.character}</p>
                    </div>)
                }
                )
                }

            </div>
        )
    }
}
