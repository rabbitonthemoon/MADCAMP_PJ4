import React from 'react';
import { Canvas } from '@react-three/fiber';
import { CameraControls } from '@react-three/drei';

const CanvasSetup = ({ children }) => {
  return (
    <Canvas style={{ width: '100%', height: '100vh', background: '#737373' }} camera={{ position: [200,200,200] }}>
      <CameraControls minPolarAngle={0} maxPolarAngle={Math.PI / 0.5} />
      {children}
    </Canvas>
  );
}

export default CanvasSetup;
