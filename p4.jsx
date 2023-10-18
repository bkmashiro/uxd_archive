import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/Header'
import Cities from './components/cities/Cities';

ReactDOM.render(
  <div>
    <Header />
    <Cities />
  </div>,
  
  document.getElementById('reactapp'),
);
