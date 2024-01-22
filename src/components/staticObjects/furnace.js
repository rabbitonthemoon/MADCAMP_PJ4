import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

function Furnace() {
    const { scene: furnaceScene } = useGLTF('../model/furnace.glb');

    // 초기 위치 정보 제거
    const removeInitialPosition = (scene) => {
        scene.traverse((child) => {
            if (child.isMesh) {
                child.position.set(0, 0, 0); // 초기 위치를 0, 0, 0으로 설정 또는 원하는 값으로 설정
            }
        });
    };

    removeInitialPosition(furnaceScene);
  
    const furnaceRef = useRef();

    const furnaceContainerRef = useRef();
    
    useFrame(() => {
      // 각각의 오브젝트 위치와 크기 설정
      furnaceRef.current.position.set(0, 0, 0);
      furnaceRef.current.scale.set(2, 3, 2);
      furnaceRef.current.rotation.set(0, Math.PI, 0);

      furnaceContainerRef.current.position.set(80, -30, -85);
      furnaceContainerRef.current.scale.set(1, 1, 1);
    });
  
    return (
      <>
        <group ref={furnaceContainerRef}>
          {/* 각 오브젝트를 primitive로 렌더링 */}
          <primitive object={furnaceScene.clone()} ref={furnaceRef} />
        </group>
      </>
    );
}
  
  export default Furnace;