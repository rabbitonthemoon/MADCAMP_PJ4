import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

function Frog() {
    const { scene: frogScene } = useGLTF('../model/chocolate-frog.glb');

    // 초기 위치 정보 제거
    const removeInitialPosition = (scene) => {
        scene.traverse((child) => {
            if (child.isMesh) {
                child.position.set(0, 0, 0); // 초기 위치를 0, 0, 0으로 설정 또는 원하는 값으로 설정
            }
        });
    };

    removeInitialPosition(frogScene);
  
    const frogRef = useRef();

    const frogContainerRef = useRef();
    
    useFrame(() => {
      // 각각의 오브젝트 위치와 크기 설정
      frogRef.current.position.set(0, 0, 0);
      frogRef.current.scale.set(3, 3, 3);
      frogRef.current.rotation.set(0, Math.PI / 2, 0);

      frogContainerRef.current.position.set(0, -100, 30);
      frogContainerRef.current.scale.set(12, 12, 12);
    });
  
    return (
      <>
        <group ref={frogContainerRef}>
          {/* 각 오브젝트를 primitive로 렌더링 */}
          <primitive object={frogScene.clone()} ref={frogRef} />
        </group>
      </>
    );
}
  
  export default Frog;