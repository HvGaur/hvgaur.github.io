import React from 'react';
import './App.css';
import Header from './components/Header';
import Widget from './components/Widget';

function App() {
  return (
    <React.Fragment>
      <Header />
      <div className='background__main'></div>
      <Widget />
    </React.Fragment>
  );
}

export default App;
