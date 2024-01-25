import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

function Cat() {
    const { scene: catScene } = useGLTF('../model/cat.glb');

    // 초기 위치 정보 제거
    const removeInitialPosition = (scene) => {
        scene.traverse((child) => {
            if (child.isMesh) {
                child.position.set(0, 0, 0); // 초기 위치를 0, 0, 0으로 설정 또는 원하는 값으로 설정
            }
        });
    };

    removeInitialPosition(catScene);
  
    const catRef = useRef();

    const catContainerRef = useRef();
    
    useFrame(({clock}) => {
      // 각각의 오브젝트 위치와 크기 설정
      catRef.current.position.set(0, 0, 0);
      catRef.current.scale.set(3, 3, 3);
      catRef.current.rotation.set(0, Math.PI / 2, 0);

      catContainerRef.current.position.set(0, -100, 30);
      catContainerRef.current.scale.set(12, 12, 12);
      catContainerRef.current.rotation.set(0, - 0.5 *  clock.getElapsedTime(), 0);
    });
  
    return (
      <>
        <group ref={catContainerRef}>
          {/* 각 오브젝트를 primitive로 렌더링 */}
          <primitive object={catScene.clone()} ref={catRef} />
        </group>
      </>
    );
}
  
  export default Cat;