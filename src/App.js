import './App.css';
import './MyCursor.css';

import React, { useState, useEffect } from 'react';
import CanvasSetup from './canvasSetup';
import Lighting from './Lighting';
import Bed from './components/staticObjects/bed'
import Desk from './components/staticObjects/desk'
import Furnace from './components/staticObjects/furnace'
import Carpet from './components/staticObjects/carpet'
import Cat from './components/staticObjects/cat'
import Pot from './components/staticObjects/pot'
import Paperplane from './components/staticObjects/paperplane'
import Phillows from './components/staticObjects/phillows'
import Candle from './components/staticObjects/candle'
import Frame from './components/staticObjects/portrait-frame'
import Book from './components/staticObjects/book'
import Dorm from './components/staticObjects/dorm'
import Window from './components/staticObjects/window'
import Owl from './components/animatedObjects/owl'
import Broom from './components/animatedObjects/broom'
import Wand from './components/animatedObjects/magic-wand'
import Scroll from './components/animatedObjects/scroll'
import SortingHat from './components/animatedObjects/sorting-hat'
import Books from './components/staticObjects/books'
import Chandelier from './components/staticObjects/chandelier'

import MyCursor from './MyCursor';

function App() {
  const [lightOn, setLightOn] = useState(true);

  useEffect(() => {
    console.log(`The light is now ${lightOn ? 'ON' : 'OFF'}.`);
  }, [lightOn]);

  return (
    <>
    {/* <MyCursor /> */}
    <CanvasSetup>
  
      <Lighting lightOn={lightOn} />        
      <Bed lightOn={lightOn}/>
      <Desk lightOn={lightOn}/>
      <Furnace lightOn={lightOn}/>
      <Carpet lightOn={lightOn}/>
      <Cat lightOn={lightOn}/>
      <Pot lightOn={lightOn}/>
      <Paperplane lightOn={lightOn}/>
      <Phillows lightOn={lightOn}/>
      <Owl lightOn={lightOn}/>
      <Broom lightOn={lightOn}/>
      <Wand lightOn={lightOn}/>
      <Scroll lightOn={lightOn}/>
      <SortingHat lightOn={lightOn}/>
      <Frame lightOn={lightOn}/>
      <Candle lightOn={lightOn}/>
      <Book lightOn={lightOn}/>
      <Books lightOn={lightOn}/>
      <Chandelier setLightOn={setLightOn}/>
      <Dorm lightOn={lightOn}/>
      <Window lightOn={lightOn}/>

    </CanvasSetup>
    </>
  );
}

export default App;