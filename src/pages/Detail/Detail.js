import React, {useContext} from "react"
import { Gif } from "../../components/Gif";
import GifContext from "../../context/gifsContext"


export default function Detail ({params}){
    const context = useContext(GifContext);
    const gifs = context[0]
    const gif = gifs.find(singleGif => singleGif.id === params.id)
    return(
        <div>
            <Gif {...gif}></Gif>
        </div>
    )
}