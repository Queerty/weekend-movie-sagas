import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './MovieList.css'

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    const history = useHistory();

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const handleDetails = (movie) => {
        console.log('Clicked movie with id', movie.id)
        dispatch({ type: 'FETCH_DETAILS', payload: Number(movie.id)});
        history.push(`/details/${movie.id})`);
    }

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id}>
                            <div onClick={() => handleDetails(movie)}>
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title}/>
                            </div>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

// fetchDetails() {
//     dispatch({type: 'FETCH_DETAILS', payload: })

// }

export default MovieList;