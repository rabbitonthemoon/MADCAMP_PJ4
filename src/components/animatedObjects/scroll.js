import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';


function Scroll() {
    const { scene: scrollScene } = useGLTF('../model/scroll.glb');

    // 초기 위치 정보 제거
    const removeInitialPosition = (scene) => {
        scene.traverse((child) => {
            if (child.isMesh) {
                child.position.set(0, 0, 0); // 초기 위치를 0, 0, 0으로 설정 또는 원하는 값으로 설정
            }
        });
    };

    removeInitialPosition(scrollScene);
  
    const scrollRef = useRef();

    const scrollContainerRef = useRef();
    
    useFrame(() => {
      // 각각의 오브젝트 위치와 크기 설정
      // TODO: position, rotation, scale에 animation
      // e.g. catRef.current.position.x = 30 * Math.sin(clock.getElapsedTime() * 3);
      scrollRef.current.position.set(0, 0, 0);
      scrollRef.current.scale.set(5, 5, 5);
    //   scrollRef.current.rotation.set(0, Math.PI / 2, 0);

      scrollContainerRef.current.position.set(-40, -50, -80);
      scrollContainerRef.current.scale.set(5, 10, 10);
    });
  
    return (
      <>
        <group ref={scrollContainerRef}>
          {/* 각 오브젝트를 primitive로 렌더링 */}
          <primitive object={scrollScene.clone()} ref={scrollRef} />
        </group>
      </>
    );
}
  
  export default Scroll;