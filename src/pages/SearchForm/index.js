import React, {useState} from "react";
import {  useLocation } from "wouter";

const RATINGS = ['g','pg','pg-13','r'];
 function SearchForm (){
    const [keyword, setKeyWord] = useState('');
    const [path, pushLocation] = useLocation();
    const [rating, setRating] = useState('g')


    const onChangeInput = (event)=>{
        setKeyWord(event.target.value)
    }

    const onHandleSubmit = event =>{
        event.preventDefault()
        pushLocation(`/api/${keyword}/${rating}`)
    }

    const onHandleSelect = (evt) =>{
        setRating(evt.target.value)
    }
    return(
        <form onSubmit={onHandleSubmit}>
            <input placeholder="Busque gif" onChange={onChangeInput} type="text" value={keyword}></input>
            <button type="submit">Buscar gif</button>
            <select value={rating} onChange={onHandleSelect}>
                {RATINGS.map(rating =><option key={rating}>{rating}</option>)}
            </select>
        </form>
    )
}

export default  (SearchForm)