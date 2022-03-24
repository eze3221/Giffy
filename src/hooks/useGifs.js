import { useContext, useEffect, useState } from 'react';
import GifContext from '../context/gifsContext';
import getGif from '../service/getGif';

const INITIAL_PAGE = 0;
export function useGifs({keyword} = {keyword: null},{rating}){
const [gifs, setGift] = useContext(GifContext)
const [page, setPage] = useState(INITIAL_PAGE)

const keyWordToUse = keyword || localStorage.getItem('lastKeyWord') 

useEffect(()=>{
        
        
        getGif({keyword : keyWordToUse},{rating})
        .then(res => {
        setGift(res);
        localStorage.setItem('lastKeyword', keyword)
    })
        
    },[keyword, setGift, keyWordToUse,rating])


useEffect(()=>{
    if(page === INITIAL_PAGE)return

    getGif({keyword: keyWordToUse, page})
        .then(nextGif=>{
            setGift(prevGif => prevGif.concat(nextGif))
        })

}, [page,keyWordToUse, setGift])
    return {gifs, setPage}
}