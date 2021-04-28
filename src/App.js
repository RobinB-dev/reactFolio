import React from 'react';
import Card from './Card';
import Footer from './Footer';
import GetMyApi from './services/importApi';


import './style.css';

function App() {
  return [
    <GetMyApi/>,
    <Footer/>
  ]
}

export default App;
