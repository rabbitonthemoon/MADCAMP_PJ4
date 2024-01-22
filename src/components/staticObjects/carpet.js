import React, { useRef } from 'react';
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
    
    useFrame(() => {
      // 각각의 오브젝트 위치와 크기 설정
      carpetRef.current.position.set(0, 0, 0);
      carpetRef.current.scale.set(5, 5, 5);
      carpetRef.current.rotation.set(0, Math.PI / 2, 0);

      carpetContainerRef.current.position.set(0, -100, 30);
      carpetContainerRef.current.scale.set(12, 12, 12);
    });
  
    return (
      <>
        <group ref={carpetContainerRef}>
          {/* 각 오브젝트를 primitive로 렌더링 */}
          <primitive object={carpetScene.clone()} ref={carpetRef} />
        </group>
      </>
    );
}
  
  export default Carpet;