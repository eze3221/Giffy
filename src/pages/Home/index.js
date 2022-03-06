import {  useLocation } from "wouter";
import './home.css'
import {ListOfTrendingGifs} from "../../trendingGifs/ListOfTrendingGifs";
import SearchForm from "../SearchForm";
import { useCallback } from "react";

 export const  Home = () =>{
     const [path, pushLocation] = useLocation();
     

    const onHandleSubmit = useCallback(({keyword}) =>{
        pushLocation(`/api/${keyword}`)
        
    }, [pushLocation])
    
    return(<div>
        
        <SearchForm onSubmit={onHandleSubmit}/>
        <ListOfTrendingGifs></ListOfTrendingGifs>
            
            
        </div>)
}