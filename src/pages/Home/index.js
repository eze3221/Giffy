
import './home.css'
import {ListOfTrendingGifs} from "../../trendingGifs/ListOfTrendingGifs";
import SearchForm from "../SearchForm";
import { useCallback } from "react";

 export const  Home = () =>{

    
    return(<div>
        
        <SearchForm/>
        <ListOfTrendingGifs></ListOfTrendingGifs>
            
            
        </div>)
}