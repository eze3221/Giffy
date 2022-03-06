import React, { createContext, useState } from "react";

const GifContext = createContext({});

export  function GifsContextProvider ({children}){

    const [gifs, SetGifs] = useState([])

    return <GifContext.Provider value={[gifs, SetGifs]}>
        {children}
    </GifContext.Provider>
}

export default GifContext;