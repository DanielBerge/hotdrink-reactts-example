import React from 'react';
import './App.css';
import {useDoubleNumber} from "./hooks/useDoubleNumber";

function App() {
  const [a, b, setNumA] = useDoubleNumber();

  return (
    <div className="App">
      <p>A: {a}</p>
      <p>B: {b}</p>
      <button
          onClick={() => {
            setNumA(a + 1)
          }}
      >Increment
      </button>
    </div>
  );
}

export default App;
