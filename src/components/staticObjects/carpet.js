import React, { useRef, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

function Carpet() {
    const { scene: carpetScene } = useGLTF('../model/carpet.glb');

    // 초기 위치 정보 제거
    const removeInitialPosition = (scene) => {
        scene.traverse((child) => {
            if (child.isMesh) {
                child.position.set(0, 0, 0); // 초기 위치를 0, 0, 0으로 설정 또는 원하는 값으로 설정
            }
        });
    };

    removeInitialPosition(carpetScene);
  
    const carpetRef = useRef();

    const carpetContainerRef = useRef();

    const [carpetPosition, setcarpetPosition] = useState([0, 0, 0]);
    const [carpetScale, setcarpetScale] = useState([5, 5, 5]);
    const [carpetRotation, setcarpetRotation] = useState([0, Math.PI / 2, 0]);

    const [carpetRefContainerPosition, setcarpetRefContainerPosition] = useState([0, -100, 30]);
    const [carpetRefContainerScale, setcarpetRefContainerScale] = useState([12, 12, 12]);
  
  
    return (
      <>
      <group ref={carpetContainerRef} position={carpetRefContainerPosition} scale={carpetRefContainerScale} >
        {/* 각 오브젝트를 primitive로 렌더링 */}
        <primitive object={carpetScene.clone()} ref={carpetRef} position={carpetPosition} scale={carpetScale} rotation={carpetRotation}/>
      </group>
    </>
    );
}
  
  export default Carpet;