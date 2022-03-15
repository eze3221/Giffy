import { useEffect, useState } from "react";
import GetSingleGif from "../service/getSingleGif";
import { useGifs } from "./useGifs";

export default function useSingleGif({id}){
    const {gifs} = useGifs();
    const gifFromCache = gifs.find(singleGif => singleGif.id === id);

    const [gif, setGifs] = useState(gifFromCache);

    useEffect(function() {
        if(!gif){
            GetSingleGif({id})
                .then(setGifs)
        }
    },[id, gif])
    return gif;
}