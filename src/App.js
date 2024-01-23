import './App.css';

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

function App() {
  const [lightOn, setLightOn] = useState(true);

  useEffect(() => {
    console.log(`The light is now ${lightOn ? 'ON' : 'OFF'}.`);
  }, [lightOn]);



  return (
    <>
    <CanvasSetup>

      <Lighting lightOn={lightOn} />

      {/* X 축 그리드 (Red) - XZ 평면
      <gridHelper args={[200, 100, 'red', 'red']} position={[0, -100, 0]} rotation={[0, 0, 0]} />
      
      {/* Y 축 그리드 (Green) - XY 평면 */}
      {/* <gridHelper args={[200, 100, 'green', 'green']} position={[-100, 0, 0]} rotation={[0, 0, Math.PI / 2]} /> */}
      
      {/* Z 축 그리드 (Blue) - YZ 평면 */}
      {/* <gridHelper args={[200, 100, 'blue', 'blue']} position={[0, 0, -100]} rotation={[Math.PI / 2, 0, 0]} /> */} 
        
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

    {/* <button className="toggle-button" onClick={() => setLightOn(!lightOn)}>
        button
      </button> */}
    </>
  );
}

export default App;
