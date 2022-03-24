import React from "react"
import { Gif } from "../../components/Gif"
import getGif from "../../service/getGif";
import { Link, Route } from 'wouter';
import { useEffect, useState } from 'react';
import { useGifs } from "../../hooks/useGifs";
import './styless.css'
import SearchForm from "../SearchForm";

export default function ListOfGifs({params}){
    const {keyword,rating} = params
    const {gifs, setPage} = useGifs({keyword},{rating})
    

    const handleNextPage = () => setPage(prevPage => prevPage + 1)

    return(<div >
            <SearchForm></SearchForm>
            <Link to='/'>Home</Link>
            <h1>{keyword}</h1>
           <div className="ListOfGifs">
            {
            gifs.map(({id, title, url})=>{
                
            return(<Gif
                        key={id} 
                        url={url}
                        title={title}
                        id={id}
                    ></Gif>)
            })
            
            }
            </div> 
            <button onClick={handleNextPage}>Next Page</button>
            </div>)
}