// import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';

function MovieDetails(){
//movie.description
const dispatch = useDispatch();

const movies = useSelector(store => store.movies);
useEffect( () => {
    dispatch({ type: 'FETCH_MOVIES' });
}, [])

function handleClick() {
    dispatch({type: 'FETCH_DETAILS'})
};
    return(
        <>
         {movies.map(movie => {
            //  if(movie.id === this.movie.id)
                    return (
                        <div key={movie.id} onClick={handleClick}>
                            <h3>{movie.description}</h3>

                        </div>
                    );
                })}
        </>
    )
}

export default MovieDetails;