import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put, call } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('FETCH_GENRES', fetchGenres);
    yield takeEvery('FETCH_DETAILS', fetchDetails);
    yield takeEvery('ADD_MOVIE', postMovie);
}

function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch {
        console.log('get all movies error');
    }
        
}
//get genres from DB
function* fetchGenres() {
    try {
    const genreResponse = yield axios.get('/api/genre');
    console.log('get genres:', genreResponse.data);
    yield put({ type: 'SET_GENRE', payload: genreResponse.data });
}catch (error) {
    console.log('get genres error:', error)
}
}

function* fetchDetails(action) {
    //get details from DB
    try {
    const detailsResponse = yield axios.get(`/api/details/${action.payload}`);
    console.log('get details:', detailsResponse.data);
    yield put({ type: 'SET_DETAILS', payload: detailsResponse.data})
} catch (error) {
    console.log('error fetching details', error);
}
};//end fetchDetails

function* postMovie(action) {
    try {
        yield call(axios.post, "/api/movie", action.payload);
        yield put({ type: "FETCH_MOVIES"});
    } catch (error){
        console.log('error posting new movie', error)
    }
}
// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genresReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

//Used to store details for clicked movie
const detailsReducer = (state = 0, action) => {
    //payload movie.id
    switch (action.type){
        case 'SET_DETAILS':
            return action.payload;
        default:
            return state;
    }
}
// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genresReducer,
        detailsReducer
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
