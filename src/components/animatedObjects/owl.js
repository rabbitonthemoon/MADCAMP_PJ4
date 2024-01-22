import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';


function Owl() {
    const { scene: owlScene } = useGLTF('../model/owl.glb');

    // 초기 위치 정보 제거
    const removeInitialPosition = (scene) => {
        scene.traverse((child) => {
            if (child.isMesh) {
                child.position.set(0, 0, 0); // 초기 위치를 0, 0, 0으로 설정 또는 원하는 값으로 설정
            }
        });
    };

    removeInitialPosition(owlScene);
  
    const owlRef = useRef();

    const owlContainerRef = useRef();
    
    useFrame(() => {
      // 각각의 오브젝트 위치와 크기 설정
      // TODO: position, rotation, scale에 animation
      // e.g. catRef.current.position.x = 30 * Math.sin(clock.getElapsedTime() * 3);
      owlRef.current.position.set(0, 0, 0);
      owlRef.current.scale.set(5, 5, 5);
    //   owlRef.current.rotation.set(0, Math.PI / 2, 0);

      owlContainerRef.current.position.set(-55, 0, -10);
      owlContainerRef.current.scale.set(5, 5, 5);
    });
  
    return (
      <>
        <group ref={owlContainerRef}>
          {/* 각 오브젝트를 primitive로 렌더링 */}
          <primitive object={owlScene.clone()} ref={owlRef} />
        </group>
      </>
    );
}
  
  export default Owl;