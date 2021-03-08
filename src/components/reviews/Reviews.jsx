import React, { Component } from 'react'
import { getReviews } from '../../services/moviesApi';
import styles from "./Reviews.module.css"

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
            <>
                <h2 className={styles.header}>Rewievs</h2>
                <div className={styles.container}>
                    {!reviews.length ?
                        <h3 className={styles.noReviws}> No reviews yet</h3>
                        :

                        <ul className={styles.list}>
                            {reviews?.map((review) => {

                                return (<li key={review.id} className={styles.review}>
                                    <h3 className={styles.author}>{review.author}:</h3>
                                    <p className={styles.text}>{review.content}</p>
                                </li>)
                            }
                            )}
                        </ul>
                    }
                </div>
            </>
        )
    }
}
