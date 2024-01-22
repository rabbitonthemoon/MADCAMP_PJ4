import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';


function SortingHat() {
    const { scene: sortingHatScene } = useGLTF('../model/sorting-hat.glb');

    // 초기 위치 정보 제거
    const removeInitialPosition = (scene) => {
        scene.traverse((child) => {
            if (child.isMesh) {
                child.position.set(0, 0, 0); // 초기 위치를 0, 0, 0으로 설정 또는 원하는 값으로 설정
            }
        });
    };

    removeInitialPosition(sortingHatScene);
  
    const sortingHatRef = useRef();

    const sortingHatContainerRef = useRef();
    
    useFrame(() => {
      // 각각의 오브젝트 위치와 크기 설정
      // TODO: position, rotation, scale에 animation
      // e.g. catRef.current.position.x = 30 * Math.sin(clock.getElapsedTime() * 3);
      sortingHatRef.current.position.set(0, 0, 0);
      sortingHatRef.current.scale.set(5, 5, 5);
    //   sortingHatRef.current.rotation.set(0, Math.PI / 2, 0);

      sortingHatContainerRef.current.position.set(35, -70, -40);
      sortingHatContainerRef.current.scale.set(1, 1, 1);
    });
  
    return (
      <>
        <group ref={sortingHatContainerRef}>
          {/* 각 오브젝트를 primitive로 렌더링 */}
          <primitive object={sortingHatScene.clone()} ref={sortingHatRef} />
        </group>
      </>
    );
}
  
  export default SortingHat;