import React, { useRef } from 'react';
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
    
    useFrame(() => {
      // 각각의 오브젝트 위치와 크기 설정
      frameRef.current.position.set(0, 0, 0);
      frameRef.current.scale.set(5, 5, 5);
      frameRef.current.rotation.set(0, - Math.PI / 2, 0);

      frameContainerRef.current.position.set(40, -10, -100);
      frameContainerRef.current.scale.set(5, 5, 5);
    });
  
    return (
      <>
        <group ref={frameContainerRef}>
          {/* 각 오브젝트를 primitive로 렌더링 */}
          <primitive object={frameScene.clone()} ref={frameRef} />
        </group>
      </>
    );
}
  
  export default Frame;