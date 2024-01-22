import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';


function Candle() {
    const { scene: candleScene } = useGLTF('../model/candle.glb');

    // 초기 위치 정보 제거
    const removeInitialPosition = (scene) => {
        scene.traverse((child) => {
            if (child.isMesh) {
                child.position.set(0, 0, 0); // 초기 위치를 0, 0, 0으로 설정 또는 원하는 값으로 설정
            }
        });
    };

    removeInitialPosition(candleScene);
  
    const candleRef = useRef();

    const candleContainerRef = useRef();
    
    useFrame(() => {
      // 각각의 오브젝트 위치와 크기 설정
      candleRef.current.position.set(0, 0, 0);
      candleRef.current.scale.set(50, 50, 50);
    //   candleRef.current.rotation.set(0, Math.PI / 2, 0);

      candleContainerRef.current.position.set(120, -70, -260);
      candleContainerRef.current.scale.set(1, 1, 1);
    });
  
    return (
      <>
        <group ref={candleContainerRef}>
          {/* 각 오브젝트를 primitive로 렌더링 */}
          <primitive object={candleScene.clone()} ref={candleRef} />
        </group>
      </>
    );
}
  
  export default Candle;