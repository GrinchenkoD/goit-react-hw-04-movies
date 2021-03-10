import React, { Component } from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import { searchByID } from '../../services/moviesApi'
import placeholder from "../../images/placeholder.png"
import Cast from '../../components/cast/Cast'
import Reviews from '../../components/reviews/Reviews'
import styles from "./MovieDetailsPage.module.css"

export default class MovieDetailsPage extends Component {
    state = {
        movie: {},
        movieData: true,

    }

    componentDidMount() {

        const { movieId } = this.props.match.params;
        searchByID(movieId).then(data => this.setState({ movie: { ...data } }))
        if (this.props.location.state?.from && this.props.location.state?.query) {

            this.setState({
                from: this.props.location.state.from,
                query: this.props.location.state.query

            })
        }
    }

    handleGoBack = () => {

        this.props.location.state?.from && this.props.location.state?.query ?
            this.props.history.push({
                pathname: this.props.location.state.from,
                search: `?query=${this.props.location.state.query}`
            })
            : this.props.history.push({
                pathname: "/",

            })
    }

    render() {
        const { title, vote_average, overview, genres, poster_path } = this.state.movie;
        const { match } = this.props;
        const baseImgUrl = "https://image.tmdb.org/t/p/w500";
        const currentImgUrl = `${baseImgUrl}${poster_path}`;
        const { movieId } = this.props.match.params;



        return (

            <>
                <button type="button" onClick={this.handleGoBack} className={styles.backBtn}>Go back</button>
                <div className={styles.detailsThumb}>

                    <img src={poster_path ? currentImgUrl : placeholder}
                        alt={`${title} poster`} className={styles.poster} />

                    <div className={styles.textContainer}>
                        <h2 className={styles.title}>{title}</h2>
                        <p className={styles.undertitle}>User score: {vote_average * 10}%</p>
                        <h3 className={styles.undertitle}>Overview</h3>
                        <p className={styles.text}>{overview}</p>
                        <h3 className={styles.undertitle}>Genres</h3>
                        <p className={styles.text}>{genres?.map((genre) => <span key={genre.id}>{genre.name} </span>)}</p>

                        <ul>
                            <li>
                                <NavLink to={{
                                    pathname: `${match.url}/cast`,
                                    state: {
                                        from: this.props.location.state?.from,
                                        query: this.props.location.state?.query
                                    }
                                }} className={styles.link} activeClassName={styles.linkActive}>Cast</NavLink>
                            </li>
                            <li>
                                <NavLink to={{
                                    pathname: `${match.url}/reviews`,
                                    state: {
                                        from: this.props.location.state?.from,
                                        query: this.props.location.state?.query
                                    }
                                }} className={styles.link} activeClassName={styles.linkActive}>Reviews</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>

                <Switch>
                    <Route
                        path={`${match.path}/cast`}
                        render={props => <Cast {...props} movieId={movieId} />}
                    />
                    <Route
                        path={`${match.path}/reviews`}
                        render={props => <Reviews {...props} movieId={movieId} />}
                    />
                </Switch>

            </>

        )
    }
}
