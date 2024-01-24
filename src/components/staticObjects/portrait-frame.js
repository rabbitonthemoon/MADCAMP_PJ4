import React, { useRef, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';


function Frame() {
    const { scene: frameScene } = useGLTF('../model/portrait-frame.glb');

    // 초기 위치 정보 제거
    const removeInitialPosition = (scene) => {
        scene.traverse((child) => {
            if (child.isMesh) {
                child.position.set(0, 0, 0); // 초기 위치를 0, 0, 0으로 설정 또는 원하는 값으로 설정
            }
        });
    };

    removeInitialPosition(frameScene);
  
    const frameRef = useRef();

    const frameContainerRef = useRef();

    const [framePosition, setframePosition] = useState([0, 0, 0]);
    const [frameScale, setframeScale] = useState([5, 5, 5]);
    const [frameRotation, setframeRotation] = useState([0, - Math.PI / 2, 0]);

    const [frameRefContainerPosition, setframeRefContainerPosition] = useState([40, -10, -100]);
    const [frameRefContainerScale, setframeRefContainerScale] = useState([5, 5, 5]);
  
    return (
      <>
        <group ref={frameContainerRef} position={frameRefContainerPosition} scale={frameRefContainerScale}>
          {/* 각 오브젝트를 primitive로 렌더링 */}
          <primitive object={frameScene.clone()} ref={frameRef} position={framePosition} scale={frameScale} rotation={frameRotation} />
        </group>
      </>
    );
}
  
  export default Frame;