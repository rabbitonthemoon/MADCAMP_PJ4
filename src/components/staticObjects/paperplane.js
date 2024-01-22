import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

function Paperplane() {
    const { scene: paperplaneScene } = useGLTF('../model/paper-plane.glb');

    // 초기 위치 정보 제거
    const removeInitialPosition = (scene) => {
        scene.traverse((child) => {
            if (child.isMesh) {
                child.position.set(0, 0, 0); // 초기 위치를 0, 0, 0으로 설정 또는 원하는 값으로 설정
            }
        });
    };

    removeInitialPosition(paperplaneScene);
  
    const paperplaneRef = useRef();

    const paperplaneContainerRef = useRef();
    
    useFrame(() => {
      // 각각의 오브젝트 위치와 크기 설정
      paperplaneRef.current.position.set(4, 0.3, 0);
      paperplaneRef.current.scale.set(0.5, 0.5, 0.5);
      paperplaneRef.current.rotation.set(0, Math.PI / 2, 0);

      paperplaneContainerRef.current.position.set(0, -100, 30);
      paperplaneContainerRef.current.scale.set(12, 12, 12);
    });
  
    return (
      <>
        <group ref={paperplaneContainerRef}>
          {/* 각 오브젝트를 primitive로 렌더링 */}
          <primitive object={paperplaneScene.clone()} ref={paperplaneRef} />
        </group>
      </>
    );
}
  
  export default Paperplane;