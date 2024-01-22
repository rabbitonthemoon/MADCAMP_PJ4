// import React, { useRef } from 'react';
// import { useGLTF } from '@react-three/drei';
// import { useFrame } from '@react-three/fiber';

// function Room() {
//   const { scene } = useGLTF('/room.glb');
//   const roomRef = useRef();

//   useFrame(({ clock }) => {
//     // roomRef.current.position.x = 30 * Math.sin(clock.getElapsedTime() * 3);
//     // roomRef.current.position.z = 30 * Math.cos(clock.getElapsedTime() * 3);
//     // roomRef.current.position.y = 15 * Math.cos(clock.getElapsedTime() * 3) + 15;
//     roomRef.current.position.set(0, 0, 0);
//     roomRef.current.scale.set(5, 5, 5);
//   });

//   return <primitive object={scene} ref={roomRef} />;
// }

import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';

function Room({ lightOn }) {
  const gltf = useGLTF('/room.glb');
  const roomRef = useRef();
  const lightRef = useRef();

  const { scene: threeScene } = useThree();

  useEffect(() => {
    if (lightRef.current) {
      lightRef.current.visible = lightOn;
      lightRef.current.intensity = lightOn ? 2 : 0.1;
    }
  }, [lightOn, lightRef.current]);

  useEffect(() => {
    if (!lightRef.current) {
      const light = new THREE.PointLight(0xffffff, 1, 100);
      light.position.set(0, 5, 0);
      threeScene.add(light);
      lightRef.current = light;
    }

    return () => {
      if (lightRef.current) {
        threeScene.remove(lightRef.current);
      }
    };
  }, [threeScene]);

  return <primitive object={gltf.scene} ref={roomRef} />;
}

useGLTF.preload('/room.glb');

export default Room;
