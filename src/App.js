import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Component/Menu';
import firebaseConfig from './firebaseInit.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
          Hola bienvenido al inicio del proyecto burger queen
        </p>
        <h1>Hola mundo</h1>
        <p><strong>Ejercicio de prueba react</strong></p>
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
  );
}

export default App;
