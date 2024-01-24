import './App.css';
import './MyCursor.css';

import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
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
import Firework from './components/animatedObjects/firework'
import Books from './components/staticObjects/books'
import Chandelier from './components/staticObjects/chandelier'
import { CameraControls } from '@react-three/drei';

import MyCursor from './MyCursor';

function App() {
  const [lightOn, setLightOn] = useState(true);
  const controlsRef = useRef();

  return (

    <Canvas
      style={{ width: '100%', height: '100vh', background: '#030036' }}
      camera={{ position: [200, 200, 200] }}
    >

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

      <CameraControls
        ref={controlsRef}
        // minPolarAngle={Math.PI / 5}      // 최소 위도 (라디안)
        // maxPolarAngle={Math.PI  * 0.6}  // 최대 위도 (라디안)
        // minAzimuthAngle={-Math.PI / 6}  // 최소 방위각 (라디안)
        // maxAzimuthAngle={Math.PI / 2}   // 최대 방위각 (라디안)
        // maxDistance={300}
      />
      <Firework/>

    </Canvas>

  );
}

export default App;