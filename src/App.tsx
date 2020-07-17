import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'fontsource-roboto';


import Slider from './components/slider/slider';

function App() {

  const [sliderVal, setSliderVal] = useState(0);

  return (
    <div className="App container-fluid">
        <h1> hello world</h1>
        <div className="main row flex">
          <div className="left-pannel col-3 border-right">
            <ul>
              <li>Slider</li>
            </ul>
          </div>
          <div className="right-pannel col-9">
            <input value={sliderVal} onChange= {e=>setSliderVal(parseInt(e.target.value))} />
            <Slider
            />
          </div>
        </div>
    </div>
  );
}

export default App;
