import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { searchByID } from '../../services/moviesApi'
import placeholder from "../../images/placeholder.png"
import Cast from '../../components/cast/Cast'
import Reviews from '../../components/reviews/Reviews'

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
                <div>
                    <div>
                        <button type="button" onClick={this.handleGoBack} >Go back</button>

                        <img src={poster_path ? currentImgUrl : placeholder} alt={`${title} poster`} />
                    </div>
                    <div>
                        <h2>{title}</h2>
                        <p>User score: {vote_average * 10}%</p>
                        <h3>Overview</h3>
                        <p>{overview}</p>
                        <h3>Genres</h3>
                        <p>{genres?.map((genre) => <span key={genre.id}>{genre.name} </span>)}</p>
                    </div>
                </div>

                <div>
                    <ul>
                        <li>
                            <Link to={{
                                pathname: `${match.url}/cast`,
                                state: {
                                    from: this.props.location.state?.from,
                                    query: this.props.location.state?.query
                                }
                            }}>Cast</Link>
                        </li>
                        <li>
                            <Link to={{
                                pathname: `${match.url}/reviews`,
                                state: {
                                    from: this.props.location.state?.from,
                                    query: this.props.location.state?.query
                                }
                            }}>Reviews</Link>
                        </li>
                    </ul>


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
