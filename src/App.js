import './App.css';

import React from 'react';
import { PerspectiveCamera } from '@react-three/drei';
import Cat from './components/cat';
import Room from './components/room';
import CanvasSetup from './canvasSetup';

function App() {
  return (
    <CanvasSetup>
      <ambientLight intensity={0.9} />
      <directionalLight color='#FFF' position={[0, 1, 0]} />

      {/* 그리드 */}
      <gridHelper args={[100, 100, 'red', 'red']} position={[0, 0, 0]} rotation={[0, 0, 0]} />
      <gridHelper args={[100, 100, 'green', 'green']} position={[-50, 50, 0]} rotation={[0, 0, Math.PI / 2]} />
      <gridHelper args={[100, 100, 'blue', 'blue']} position={[0, 50, 50]} rotation={[Math.PI / 2, 0, 0]} />

      <PerspectiveCamera fov={40} near={1} far={1000} position={[10, 0, 50]} />

      <Cat />
      <Room />
    </CanvasSetup>
  );
}

export default App;

