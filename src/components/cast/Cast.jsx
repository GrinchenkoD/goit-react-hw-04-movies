import React, { Component } from 'react'
import { searchCast } from '../../services/moviesApi';
import placeholder from "../../images/placeholder.png"
import styles from "./Cast.module.css"



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
            <>
                <h2 className={styles.header}>Cast</h2>
                <div className={styles.thumb}>

                    {cast.map((actor) => {

                        return (<div key={actor.id} className={styles.actorContainer}>
                            <img src={actor.profile_path ? `${baseImgUrl}${actor.profile_path}` : placeholder}
                                alt={` ${actor.name} `} className={styles.photo} />
                            <div className={styles.info}>
                                <h3 className={styles.name}>{actor.name}</h3>
                                <p className={styles.char}>Character: {actor.character}</p>
                            </div>
                        </div>)
                    }
                    )
                    }

                </div>
            </>
        )
    }
}
