import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';


function Wand() {
    const { scene: wandScene } = useGLTF('../model/magic-wand.glb');

    // 초기 위치 정보 제거
    const removeInitialPosition = (scene) => {
        scene.traverse((child) => {
            if (child.isMesh) {
                child.position.set(0, 0, 0); // 초기 위치를 0, 0, 0으로 설정 또는 원하는 값으로 설정
            }
        });
    };

    removeInitialPosition(wandScene);
  
    const wandRef = useRef();

    const wandContainerRef = useRef();
    
    useFrame(() => {
      // 각각의 오브젝트 위치와 크기 설정
      // TODO: position, rotation, scale에 animation
      // e.g. catRef.current.position.x = 30 * Math.sin(clock.getElapsedTime() * 3);
      wandRef.current.position.set(0, 0, 0);
      wandRef.current.scale.set(10, 10, 10);
      wandRef.current.rotation.set(Math.PI * 0.2, Math.PI * 0.3, 0);

      wandContainerRef.current.position.set(0, -10, 0);
      wandContainerRef.current.scale.set(5, 5, 5);
    });
  
    return (
      <>
        <group ref={wandContainerRef}>
          {/* 각 오브젝트를 primitive로 렌더링 */}
          <primitive object={wandScene.clone()} ref={wandRef} />
        </group>
      </>
    );
}
  
  export default Wand;