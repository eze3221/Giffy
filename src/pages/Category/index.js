import React from "react";
import { Link } from "wouter";
import './index.css'



export default function Category(props){
    const {data, title} = props
    return(
        <div className="App">
            <h4>{title}</h4>
            {
                data.map((gif)=>{
                    return(
                        <ul key={gif} className='App col3'>
                            <li key={gif}> 
                            <Link to={`/api/${gif}`}>{gif}</Link>
                            </li>
                        </ul>)
                })
            }
        </div>
    )
}