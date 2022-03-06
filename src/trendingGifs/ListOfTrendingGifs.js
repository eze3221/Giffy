import { useEffect, useState, useRef } from "react"
import getTrendingGifs from "../service/getTrendingGifs";
import Category from "../pages/Category";

export const ListOfTrendingGifs = ()=>{
    const [trending, setTrendingGifs] = useState([]);

    useEffect(()=>{
        getTrendingGifs().then(res=>setTrendingGifs(res))
        
    },[])

    return <Category data={trending} title={'TRENDING GIFS'}></Category>

}

// export default function LazyTrending(){
//     const [show, setShow] = useState(false);
//     const elementRef = useRef();

//     useEffect(function(){
//         const onChange = (entries)=>{
//             const el = entries[0]
//             if(el.isIntersecting){
//                 setShow(true)
//                 observer.disconnect();
//             }
//         }
//         const observer = new IntersectionObserver(onChange,{
//             rootMargin: '100px'
//         })

//         observer.observe(elementRef.current)
//     })

//     return <div ref={elementRef}>
//         {show ? <ListOfTrendingGifs /> : null}
//     </div>

    
// }