import React from "react"
import { Gif } from "../../components/Gif"
import getGif from "../../service/getGif";
import { Link, Route } from 'wouter';
import { useEffect, useState } from 'react';
import { useGifs } from "../../hooks/useGifs";
import './styless.css'

export default function ListOfGifs({params}){
    const {keyword} = params
    const {gifs, setPage} = useGifs({keyword})
    

    const handleNextPage = () => setPage(prevPage => prevPage + 1)

    return(<div >
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