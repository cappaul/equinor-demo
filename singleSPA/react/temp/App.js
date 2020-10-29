import React, { useEffect, useState } from 'react';
import logo from './logo.png';
import './App.css';

const App = () => {
  const [val, setVal] = useState(0);

  useEffect(() => {
    window.addEventListener('onIncrement', () => {
      setVal(window.myapp.counter);
    });
    window.addEventListener('onDecrement', () => {
      setVal(window.myapp.counter);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <>
          <h1>React</h1>
          <img
            className="App-logo"
            src={logo}
            alt="logo"
            style={{ width: '5vw' }}
          ></img>
          <p>Counter value is {val}</p>
          <input
            type="button"
            onClick={() => window.myapp.incrementor()}
            value="+"
          ></input>
          <input
            type="button"
            onClick={() => window.myapp.decrementor()}
            value="-"
          ></input>
        </>
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
  );
};

export default App;
