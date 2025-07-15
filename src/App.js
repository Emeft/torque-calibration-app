import React from "react";
import "./firebase"; // just initialize Firebase

function App() {
  return (
    <div>
      import React, { useState } from 'react';
import './App.css';

function App() {
  const [readings, setReadings] = useState({ r1: '', r2: '', r3: '' });
  const [result, setResult] = useState('');

  const handleChange = (e) => {
    setReadings({ ...readings, [e.target.name]: e.target.value });
  };

  const calculate = () => {
    const r1 = parseFloat(readings.r1);
    const r2 = parseFloat(readings.r2);
    const r3 = parseFloat(readings.r3);
    const avg = ((r1 + r2 + r3) / 3).toFixed(2);
    const error = Math.abs(avg - 60); // 60 is the target torque

    setResult(
      error <= 4
        ? `PASS ✅ (Avg: ${avg}, Error: ${error})`
        : `FAIL ❌ (Avg: ${avg}, Error: ${error})`
    );
  };

  return (
    <div className="App" style={{ padding: '2rem' }}>
      <h1>Torque Calibration Checker</h1>
      <label>
        Reading 1:
        <input type="number" name="r1" onChange={handleChange} />
      </label>
      <br />
      <label>
        Reading 2:
        <input type="number" name="r2" onChange={handleChange} />
      </label>
      <br />
      <label>
        Reading 3:
        <input type="number" name="r3" onChange={handleChange} />
      </label>
      <br /><br />
      <button onClick={calculate}>Check Torque</button>
      <h2>{result}</h2>
    </div>
  );
}

export default App;

    </div>
  );
}

export default App;