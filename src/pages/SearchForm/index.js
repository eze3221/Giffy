import React, {useState} from "react";

 function SearchForm ({onSubmit}){
    const [keyword, setKeyWord] = useState('');

    const onChangeInput = (event)=>{
        setKeyWord(event.target.value)
    }

    const onHandleSubmit = event =>{
        event.preventDefault()
        onSubmit({keyword})
    }
    return(
        <form onSubmit={onHandleSubmit}>
            <input placeholder="Busque gif" onChange={onChangeInput} type="text" value={keyword}></input>
            <button type="submit">Buscar gif</button>
        </form>
    )
}

export default React.memo(SearchForm)