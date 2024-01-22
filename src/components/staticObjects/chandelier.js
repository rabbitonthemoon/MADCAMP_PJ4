import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

function Chandelier({ onClick }) {
  const gltf = useGLTF('/chandelier.glb');
  const meshRef = useRef();

  return (
    <mesh
      ref={meshRef}
      onClick={onClick}
      geometry={gltf.nodes.mesh_0.geometry}
      position={[0, 0, 0]} // Adjust position as needed
      scale={[1, 1, 1]} // Adjust scale as needed
    >
      <primitive object={gltf.scene} dispose={null} />
    </mesh>
  );
}

useGLTF.preload('/chandelier.glb');

export default Chandelier;
