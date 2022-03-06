import React from 'react';
import { Link, Route } from 'wouter';
import './App.css';
import ListOfGifs from './pages/SearchResult/ListOfGifs';
import { Home } from './pages/Home';
import Context from './context/context';
import Detail from './pages/Detail/Detail'
import { GifsContextProvider } from './context/gifsContext';
function App() {

  

  return (
    <GifsContextProvider>
    <div className="App ">
      <Route 
        component={Home}
        path="/"/>
      <Route 
        component={Detail}
        path="/api/detail/:id"
      />  
      <Route path='/api/:keyword' component={ListOfGifs}></Route>
    </div>
    </GifsContextProvider>
    
  );
}

export default App;
