import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

function Chandelier({setLightOn}) {
    const { scene: chandelierScene } = useGLTF('../model/chandelier.glb');
    const chandelierRef = useRef();
    const chandelierContainerRef = useRef();

    // 초기 위치 정보 제거
    const removeInitialPosition = (scene) => {
        scene.traverse((child) => {
            if (child.isMesh) {
                child.position.set(0, 0, 0); // 초기 위치를 0, 0, 0으로 설정 또는 원하는 값으로 설정
            }
        });
    };

    removeInitialPosition(chandelierScene);
    
    useFrame(() => {
      // 각각의 오브젝트 위치와 크기 설정
      chandelierRef.current.position.set(0, 9, -3);
      chandelierRef.current.scale.set(0.12, 0.12, 0.12);
      chandelierRef.current.rotation.set(0, Math.PI / 2, 0);

      chandelierContainerRef.current.position.set(0, -100, 30);
      chandelierContainerRef.current.scale.set(12, 12, 12);
    });

    const handleClick = () => {
      setLightOn(prev => !prev);  // 조명 상태
    };
  
    return (
      <>
        <group ref={chandelierContainerRef}>
          {/* 각 오브젝트를 primitive로 렌더링 */}
          <primitive 
            object={chandelierScene.clone()} 
            ref={chandelierRef} 
            onClick={handleClick}/>
        </group>
      </>
    );
}
  
  export default Chandelier;