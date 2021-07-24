// import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';

function MovieDetails(){
//movie.description
const dispatch = useDispatch();

const movies = useSelector(store => store.movies);
useEffect( () => {
    dispatch({ type: 'FETCH_MOVIES' });
    dispatch({ type: 'ADD_DETAILS'})
}, [])
    return(
        <>
         {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.description}</h3>
                        </div>
                    );
                })}
        </>
    )
}

export default MovieDetails;