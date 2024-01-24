import React, { useRef, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

function Wand() {
    const { scene } = useGLTF('../model/magic-wand.glb');
  
    const wandRef = useRef();
    const [isHovered, setIsHovered] = useState(false);

    // useFrame((state, delta) => {
    //   if (isHovered) {
    //     // 마우스 오버시 회전
    //     wandRef.current.rotation.y += delta * 5; // 회전 속도 조절 가능
    //   } else {
    //     // 기본 회전
    //     wandRef.current.rotation.y += delta * 0.5; // 기본 회전 속도 조절 가능
    //   }
    // });
    useFrame((state, delta) => {
      if (isHovered && wandRef.current) {
        wandRef.current.rotation.y += 2 * Math.PI * delta; // 회전 속도임
      }
    });

    const onPointerOver = () => {
      setIsHovered(true); 
    };

    const onPointerOut = () => {
      setIsHovered(false); 
    };
  
    return (
      <group 
        ref={wandRef} 
        onPointerOver={onPointerOver} 
        onPointerOut={onPointerOut}
        position={[0, 0, 0]} // 초기 위치 설정
        scale={[30,30,30]} // 초기 스케일 설정
      >
        <primitive 
          object={scene.clone()} 
          onPointerOver={onPointerOver} 
          onPointerOut={onPointerOut} 
        />
      </group>
    );
}

useGLTF.preload('../model/magic-wand.glb');
export default Wand;
