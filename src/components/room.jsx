import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

function Room() {
  const { scene } = useGLTF('/room.glb');
  const roomRef = useRef();

  useFrame(({ clock }) => {
    // roomRef.current.position.x = 30 * Math.sin(clock.getElapsedTime() * 3);
    // roomRef.current.position.z = 30 * Math.cos(clock.getElapsedTime() * 3);
    // roomRef.current.position.y = 15 * Math.cos(clock.getElapsedTime() * 3) + 15;
    roomRef.current.position.set(0, 0, 0);
    roomRef.current.scale.set(5, 5, 5);
  });

  return <primitive object={scene} ref={roomRef} />;
}

export default Room;
