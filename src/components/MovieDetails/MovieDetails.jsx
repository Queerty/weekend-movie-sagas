// import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

function MovieDetails(){
//movie.description
const dispatch = useDispatch();
const details = useSelector(store => store.detailsReducer);
console.log('this is details', details);



    return(
        <>
        <h1>Movie Details</h1>
        <h2>{details && details[0].title}</h2>
        <img src={details && details[0].poster}/>
        <h2>{details && details[0].description}</h2>
        <h2>{details && details.map(movieProp =>{
        return(
        movieProp.name)})}</h2>
        </>
        )}



export default MovieDetails;