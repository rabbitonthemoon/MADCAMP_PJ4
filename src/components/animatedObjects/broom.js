import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';


function Broom({lightOn}) {
    const { scene: broomScene } = useGLTF('../model/broom.glb');

    // 초기 위치 정보 제거
    const removeInitialPosition = (scene) => {
        scene.traverse((child) => {
            if (child.isMesh) {
                child.position.set(0, 0, 0); // 초기 위치를 0, 0, 0으로 설정 또는 원하는 값으로 설정
            }
        });
    };

    removeInitialPosition(broomScene);
  
    const broomRef = useRef();

    const broomContainerRef = useRef();
    
    useFrame(({clock}) => {
    

      // 각각의 오브젝트 위치와 크기 설정
      // TODO: position, rotation, scale에 animation
      // e.g. catRef.current.position.x = 30 * Math.sin(clock.getElapsedTime() * 3);
      broomRef.current.position.set(0, 0, 0);

      broomRef.current.scale.set(10, 10, 10);
      // broomRef.current.rotation.set(clock.getElapsedTime(), 0, 0);

       // Oscillating rotation around the x-axis within 30 degrees
      const maxRotationX = Math.PI / 24;
      const oscillationValue = Math.sin(2 * clock.getElapsedTime());
      broomRef.current.rotation.set(
        oscillationValue * maxRotationX,
        0,
        0
      );

      broomContainerRef.current.position.set(-85, -100, 20);
      broomContainerRef.current.scale.set(5, 5, 5);
    });
  
    return (
      <>
        <group ref={broomContainerRef}>
          {/* 각 오브젝트를 primitive로 렌더링 */}
          <primitive object={broomScene.clone()} ref={broomRef} />
        </group>
      </>
    );
}
  
  export default Broom;