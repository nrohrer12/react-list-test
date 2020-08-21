import React, { useState } from 'react';
import Listview from './components/listview/Listview';
import './App.css';
import { GlobalStyle } from './App.styles';

const App = () => {
  return (
    <>
    <GlobalStyle />
    <div className="App">
       <div className="App-header">NFL Players</div>
      <Listview />
    </div>
    </>
  );
}

export default App;
