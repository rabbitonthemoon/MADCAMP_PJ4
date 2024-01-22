import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

function Phillows() {
    const { scene: phillowsScene } = useGLTF('../model/phillows.glb');

    // 초기 위치 정보 제거
    const removeInitialPosition = (scene) => {
        scene.traverse((child) => {
            if (child.isMesh) {
                child.position.set(0, 0, 0); // 초기 위치를 0, 0, 0으로 설정 또는 원하는 값으로 설정
            }
        });
    };

    removeInitialPosition(phillowsScene);
  
    const phillowsRef = useRef();

    const phillowsContainerRef = useRef();
    
    useFrame(() => {
      // 각각의 오브젝트 위치와 크기 설정
      phillowsRef.current.position.set(-6, 0.4, 2);
      phillowsRef.current.scale.set(3, 3, 3);
      phillowsRef.current.rotation.set(0, 0, 0);

      phillowsContainerRef.current.position.set(0, -100, 30);
      phillowsContainerRef.current.scale.set(12, 12, 12);
    });
  
    return (
      <>
        <group ref={phillowsContainerRef}>
          {/* 각 오브젝트를 primitive로 렌더링 */}
          <primitive object={phillowsScene.clone()} ref={phillowsRef} />
        </group>
      </>
    );
}
  
  export default Phillows;