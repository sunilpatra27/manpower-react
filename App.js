import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import './App.css';

import Home from './Components/Home/Home';

import './Assets/css/font-awesome.min.css';
import './Assets/css/bootstrap.min.css';
import './Assets/css/bootsnav.css';
import './Assets/css/custom.css';
function App() {
  return (
    <BrowserRouter>
    <div className="App">

     <Home/>
     
    </div>

    
    </BrowserRouter>
  );
}

export default App;
