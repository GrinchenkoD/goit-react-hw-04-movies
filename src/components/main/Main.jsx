import React, { Suspense, lazy } from 'react'
import { Route, Switch, } from "react-router-dom"

import Loader from "../../components/loader"

const HomePage = lazy(() => import('../../pages/homePage' /*webpackChunkName: "home-page" */))
const MovieDetailsPage = lazy(() => import('../../pages/movieDetailsPage/MovieDetailsPage' /*webpackChunkName: "movie-details-page" */))
const MoviesPage = lazy(() => import('../../pages/moviesPage/MoviesPage' /*webpackChunkName: "movies-page" */))
const NotFound = lazy(() => import('../../pages/notFound' /*webpackChunkName: "not-found" */))



const Main = () => {
    return (
        <>
            <Suspense fallback={<Loader />}>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/movies/:movieId" component={MovieDetailsPage} />
                    <Route exact path="/movies" component={MoviesPage} />
                    <Route component={NotFound} />
                </Switch>
            </Suspense>
        </>
    )
}

export default Main




// function Main() {
//     return (
//         <div>
//             <Switch>
//                 <Route exact path="/" component={HomePage} />
//                 <Route path="/movies/:movieId" component={MovieDetailsPage} />
//                 <Route exact path="/movies" component={MoviesPage} />
//                 <Route component={NotFound} />
//             </Switch>
//         </div>
//     )
// }

// export default Main
