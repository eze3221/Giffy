import React, {useContext} from "react"
import { Gif } from "../../components/Gif";
import useSingleGif from "../../hooks/useSingleGif";


export default function Detail ({params}){
    const gif = useSingleGif({id: params.id})

    if(!gif) return null

    
    return(
        <div>
            <Gif {...gif}></Gif>
        </div>
    )
}