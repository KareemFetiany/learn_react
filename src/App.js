import logo from './logo.svg';
import './App.css';
import React from 'react';
import HelloComponent from './HelloComponent';
import TimesViewedComponent from './TimesViewedComponent';
import CounterComponent from './CounterComponent';
import MyTextComponent from './MyTextComponent';


function App() {
  
  return (
    <div style={{backgroundColor: "lightblue",color:"red"}}>
      <div className="App">
      <HelloComponent/>
      <br/>
      <TimesViewedComponent/>
      <br/>
      <CounterComponent/>
      <br/>
      <MyTextComponent/>
      <br/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </div>
  );
}

export default App;


