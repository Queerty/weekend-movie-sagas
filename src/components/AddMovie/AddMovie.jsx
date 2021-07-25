import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function AddMovie(){
    const dispatch = useDispatch();
    const [newTitle, setNewTitle] = useState('');
    const [newPoster, setNewPoster] = useState('');
    const [newDescription, setNewDescription] = useState('');
    
    const handleChange = (event) => {
        setNewMovie(event.target.value);
    }

    const fetchMovies = () => {
        dispatch({ type: 'FETCH_MOVIES'});
    }

    useEffect(() => {
        fetchMovies();
    }, []);

    const handleAddMovie = event => {
        event.preventDefault();
        dispatch({ type: 'ADD_MOVIE', 
        payload: {title: newTitle, poster: newPoster, description: newDescription}});
        setNewMovie('');
    }

    return(
        <>
        <h2>Add Movie</h2>
        <input value={newTitle} onChange={handleChange} placeholder="title"/>
        <input value={newPoster} onChange={handleChange} placeholder="poster"/>
        <input value={newDescription} onChange={handleChange} placeholder="description"/>

        <button onClick={handleClick}>Add Movie</button>
        </>
    )
};

export default AddMovie;