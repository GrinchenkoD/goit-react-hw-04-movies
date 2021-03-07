import React, { Component } from 'react'
import { getReviews } from '../../services/moviesApi';

export default class Reviews extends Component {
    state = {
        reviews: []
    }

    componentDidMount() {
        const { movieId } = this.props;
        getReviews(movieId).then(result => this.setState({ reviews: [...result] }))
    }

    render() {
        const { reviews } = this.state
        return (
            <div>
                <h1>REWIEVS</h1>

                {reviews?.map((review) => {

                    return (<div key={review.id}>
                        <h3>{review.author}</h3>
                        <p>{review.content}</p>
                    </div>)
                }
                )}
            </div>
        )
    }
}
