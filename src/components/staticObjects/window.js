import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';


function Window() {
    const { scene: windowScene } = useGLTF('../model/window.glb');

    // 초기 위치 정보 제거
    const removeInitialPosition = (scene) => {
        scene.traverse((child) => {
            if (child.isMesh) {
                child.position.set(0, 0, 0); // 초기 위치를 0, 0, 0으로 설정 또는 원하는 값으로 설정
            }
        });
    };

    removeInitialPosition(windowScene);
  
    const windowRef = useRef();

    const windowContainerRef = useRef();
    
    useFrame(() => {
      // 각각의 오브젝트 위치와 크기 설정
      windowRef.current.position.set(0, 0, 0);
      windowRef.current.scale.set(5, 5, 5);
    //   windowRef.current.rotation.set(0, - Math.PI / 2, 0);

      windowContainerRef.current.position.set(-18, -50, -103);
      windowContainerRef.current.scale.set(2.3, 2.3, 2);
    });
  
    return (
      <>
        <group ref={windowContainerRef}>
          {/* 각 오브젝트를 primitive로 렌더링 */}
          <primitive object={windowScene.clone()} ref={windowRef} />
        </group>
      </>
    );
}
  
  export default Window;