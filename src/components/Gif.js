import './Gif.css'
import '../App.css'
import { Link } from 'wouter'

export const Gif = ({url, title, id})=>{
    return(
        <div className='Gif'>
        <Link to={`/api/detail/${id}`}>
            <img src={url}></img>
        </Link>
        
        </div>
    )
}