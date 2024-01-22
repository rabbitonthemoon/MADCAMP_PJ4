import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

function Pot() {
    const { scene: potScene } = useGLTF('../model/pot.glb');

    // 초기 위치 정보 제거
    const removeInitialPosition = (scene) => {
        scene.traverse((child) => {
            if (child.isMesh) {
                child.position.set(0, 0, 0); // 초기 위치를 0, 0, 0으로 설정 또는 원하는 값으로 설정
            }
        });
    };

    removeInitialPosition(potScene);
  
    const potRef = useRef();

    const potContainerRef = useRef();
    
    useFrame(() => {
      // 각각의 오브젝트 위치와 크기 설정
      potRef.current.position.set(-12, -0.8, -6);
      potRef.current.scale.set(3, 3, 3);
      potRef.current.rotation.set(0, Math.PI / 2, 0);

      potContainerRef.current.position.set(0, -100, 30);
      potContainerRef.current.scale.set(12, 12, 12);
    });
  
    return (
      <>
        <group ref={potContainerRef}>
          {/* 각 오브젝트를 primitive로 렌더링 */}
          <primitive object={potScene.clone()} ref={potRef} />
        </group>
      </>
    );
}
  
  export default Pot;