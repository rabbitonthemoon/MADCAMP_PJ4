import './App.css';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, CameraControls, useGLTF } from '@react-three/drei';
import AnimatedCat from './components/cat';
import AnimatedRoom from './components/room';

function App() {
  return (
    <Canvas style={{ width: '100%', height: '100vh', background: 'skyblue' }} camera={{ position: [50, 50, 100] }}>
      <CameraControls minPolarAngle={0} maxPolarAngle={Math.PI / 0.5} />
      <ambientLight intensity={0.9} />
      <directionalLight color='#FFF' position={[0, 1, 0]} />

      {/* X 축에 대한 그리드 */}
      <gridHelper args={[100, 100, 'red', 'red']} position={[0, 0, 0]} rotation={[0, 0, 0]} />

      {/* Y 축에 대한 그리드 */}
      <gridHelper args={[100, 100, 'green', 'green']} position={[-50, 50, 0]} rotation={[0, 0, Math.PI / 2]} />

      {/* Z 축에 대한 그리드 */}
      <gridHelper args={[100, 100, 'blue', 'blue']} position={[0, 50, 50]} rotation={[Math.PI / 2, 0, 0]} />

      <PerspectiveCamera fov={40} near={1} far={1000} position={[10, 0, 50]} />

      <AnimatedCat />
      <AnimatedRoom />
    </Canvas>
  );
}

export default App;
