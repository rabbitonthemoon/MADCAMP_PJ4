import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

function Cat() {
  const { scene } = useGLTF('/cat.glb');
  const catRef = useRef();

  useFrame(({ clock }) => {
    catRef.current.position.x = 30 * Math.sin(clock.getElapsedTime() * 3);
    catRef.current.position.z = 30 * Math.cos(clock.getElapsedTime() * 3);
    catRef.current.position.y = 15 * Math.cos(clock.getElapsedTime() * 3) + 15;
    catRef.current.scale.set(20, 20, 20);
  });

  return <primitive object={scene} ref={catRef} />;
}

export default Cat;
