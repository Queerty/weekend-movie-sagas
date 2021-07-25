import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function AddMovie(){
    const dispatch = useDispatch();
    // const [newTitle, setNewTitle] = useState('');
    // const [newPoster, setNewPoster] = useState('');
    // const [newDescription, setNewDescription] = useState('');
        const genres = useSelector(store => store.genresReducer);
        const [newMovie, setNewMovie] = useState({
            title: "",
            poster: "",
            description: "",
            genre_id: ""
        });
    
    function handleChange(evt) {
        const value = evt.target.value;
        setNewMovie({
            ...newMovie,
            [evt.target.name]: value

        });
        
    }


    useEffect(() => {
        // dispatch({ type: 'SET_GENRES'})
    }, []);

    const handleAddMovie = event => {
        event.preventDefault();
        dispatch({ type: 'ADD_MOVIE', 
        payload: {title: newMovie.title, poster: newMovie.poster, description: newMovie.description, genre_id: newMovie.genre_id }});
        setNewMovie('');
    }

    return(
        <>
        <h2>Add Movie</h2>
        <form>
        <input type="text" value={newMovie.title} onChange={handleChange} name="title"/>
        <input type="text" value={newMovie.poster} onChange={handleChange} name="poster"/>
        <input type="text" value={newMovie.description} onChange={handleChange} name="description"/>
        <input type="number" value={newMovie.genre_id} onChange={handleChange} name="genre_id"/>
        <button onClick={handleAddMovie}>Add Movie</button>
        </form>
        </>
    )
};

export default AddMovie;