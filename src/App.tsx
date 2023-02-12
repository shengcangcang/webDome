import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom"
import Home from './pages/home';
import Search from './pages/search';
import router from './router';
function App() {
  return (
    <div className="App">
 
        <Routes>
          {router.map((item)=>{
            return(
              <Route key={item.path} path={item.path} element={item.components}></Route>
            )
          })}
        </Routes>

   
    </div>
  );
}

export default App;
