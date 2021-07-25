import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@material-ui/core';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import {
    HashRouter as Router,
    Route,
    Link,
    useHistory,
  } from "react-router-dom";



function AddMovie(){
    const useStyles = makeStyles((theme) => ({
        formControl: {
          margin: theme.spacing(1),
          minWidth: 120,
        },
        selectEmpty: {
          marginTop: theme.spacing(2),
        },
      }));

      const classes = useStyles();
      
    

    const history = useHistory();
    const dispatch = useDispatch();
    // const [newTitle, setNewTitle] = useState('');
    // const [newPoster, setNewPoster] = useState('');
    // const [newDescription, setNewDescription] = useState('');
        // const genres = useSelector(store => store.genresReducer);
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
        payload: {title: newMovie.title, 
            poster: newMovie.poster, 
            description: newMovie.description, 
            genre_id: newMovie.genre_id 
        }});
        
        setNewMovie('');
    }

    const handleCancel = event => {
        event.preventDefault();
        history.push('/');

    }

    return(
        <>
        <h2>Add Movie</h2>
        <form>
        <input type="text" value={newMovie.title} onChange={handleChange} name="title"/>
        <input type="text" value={newMovie.poster} onChange={handleChange} name="poster"/>
        <input type="text" value={newMovie.description} onChange={handleChange} name="description"/>
        {/* <input type="number" value={newMovie.genre_id} onChange={handleChange} name="genre_id"/> */}
        <FormControl className={classes.formControl}>
        <InputLabel>
          Genre
        </InputLabel>
        <Select
          name ="genre_id"
          value={newMovie.genre_id}
          onChange={handleChange}
          displayEmpty
          className={classes.selectEmpty}
        >
          <MenuItem value="">
          </MenuItem>
          <MenuItem value={1}>ADVENTURE</MenuItem>
          <MenuItem value={2}>ANIMATED</MenuItem>
          <MenuItem value={3}>BIOGRAPHICAL</MenuItem>
          <MenuItem value={4}>COMEDY</MenuItem>
          <MenuItem value={5}>DISASTER</MenuItem>
          <MenuItem value={6}>DRAMA</MenuItem>
          <MenuItem value={7}>EPIC</MenuItem>
          <MenuItem value={8}>FANTASY</MenuItem>
          <MenuItem value={9}>MUSICAL</MenuItem>
          <MenuItem value={10}>ROMANTIC</MenuItem>
          <MenuItem value={11}>SCIENCE FICTION</MenuItem>
          <MenuItem value={12}>SPACE-OPERA</MenuItem>
          <MenuItem value={13}>SUPERHERO</MenuItem>
        </Select>
        <FormHelperText>Select movie genre</FormHelperText>
      </FormControl>



        <button onClick={handleAddMovie}>Add Movie</button>
        <button onClick={handleCancel}>Cancel</button>
        </form>
        </>
    )
};

export default AddMovie;