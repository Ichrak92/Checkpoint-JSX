import React from 'react';
import logo from "./logo.svg";
import './App.css';
import logo2 from "./logo192.png";
import './style.css';

function App() {
  return (
    <div style={{border:'solid (1px)',color:'black',maxWidth:'100vw'}}>
      <h1 className={'title red'}>My title</h1>
      </br>
      <img src={logo}/>
      </br>
      <img src="/image/logo192.jng"/>
      </div>
  );
}

export default App;
