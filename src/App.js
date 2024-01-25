import './App.css';

import React, { useRef, useState, useEffect } from 'react';

import { useSound } from 'use-sound';
import backgroundMusic from './background-music.mp3';

import { Canvas } from '@react-three/fiber';
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
import Mirror from './components/staticObjects/mirror'
import Owl from './components/animatedObjects/owl'
import Broom from './components/animatedObjects/broom'
import Wand from './components/animatedObjects/magic-wand'
import Scroll from './components/animatedObjects/scroll'
import SortingHat from './components/animatedObjects/sorting-hat'
import Firework from './components/animatedObjects/firework'
import Books from './components/staticObjects/books'
import Chandelier from './components/staticObjects/chandelier'
import Frog from './components/staticObjects/chocolate-frog'
import { CameraControls } from '@react-three/drei';
import Photo from './components/testImage'

import MyCursor from './MyCursor';

function App() {
  const [lightOn, setLightOn] = useState(true);
  const [photoVisible, setPhotoVisible] = useState(false);
  const controlsRef = useRef();

  const [play, { stop }] = useSound(backgroundMusic, { volume: 0.5, loop: true });

  useEffect(() => {
    // 컴포넌트가 마운트될 때 배경음악을 재생합니다.
    play();

    // 컴포넌트가 언마운트될 때 배경음악을 정지합니다.
    return () => stop();
  }, [play, stop]);

  return (
    <>
    <MyCursor />
    <Canvas
      style={{ width: '100%', height: '100vh', background: '#0a0b1a' }}
      camera={{ position: [200, 200, 200] }}
    >

      <Lighting lightOn={lightOn} />
      
      {/* 임시 */}
      <pointLight position={[100,100,100]} color="#FFFFFF" intensity={100} castShadow={true} /> 
      {/* <ambientLight color="#FFFFFF" intensity={100} castShadow={true} />  */}

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
      <SortingHat lightOn={lightOn} setPhotoVisible={setPhotoVisible} />
      <Frame lightOn={lightOn}/>
      <Candle lightOn={lightOn}/>
      <Book lightOn={lightOn}/>
      <Books lightOn={lightOn}/>
      <Chandelier setLightOn={setLightOn}/>
      <Dorm lightOn={lightOn}/>
      <Window lightOn={lightOn}/>

      <Frog lightOn={lightOn}/>
      <Mirror lightOn={lightOn}/>

      {photoVisible && (
          <Photo />
        )}

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
    </>
  );
}

export default App;