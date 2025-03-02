// src/App.js
import React from 'react';


import Router from './navigation/Router.jsx';
import { BrowserRouter } from 'react-router-dom';



const App = () => {
  return (
   

    <BrowserRouter>
      <Router />
    </BrowserRouter>


    
  );
};

export default App;
