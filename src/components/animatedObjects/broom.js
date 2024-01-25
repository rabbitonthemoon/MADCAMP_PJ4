import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

function Broom({ lightOn }) {
    const { scene: broomScene } = useGLTF('../model/broom.glb');
    const broomRef = useRef();
    const broomContainerRef = useRef();
    const savedAnimationState = useRef({ position: [0, 0, 0], rotation: [0, 0, 0] });

    // 초기 위치 정보 제거
    const removeInitialPosition = (scene) => {
        scene.traverse((child) => {
            if (child.isMesh) {
                child.position.set(0, 0, 0); // 초기 위치를 0, 0, 0으로 설정 또는 원하는 값으로 설정
            }
        });
    };

    removeInitialPosition(broomScene);

    useFrame(({ clock }) => {
      broomRef.current.position.set(...savedAnimationState.current.position);
      broomRef.current.scale.set(10, 10, 10);
      broomContainerRef.current.position.set(-85, -100, 20);
      broomContainerRef.current.scale.set(5, 5, 5);

      if (!lightOn) {
          const maxRotationX = Math.PI / 24;
          const oscillationValue = Math.sin(2 * clock.getElapsedTime());
          broomRef.current.rotation.set(
              oscillationValue * maxRotationX,
              savedAnimationState.current.rotation[1],
              savedAnimationState.current.rotation[2]
          );

          // 현재 애니메이션 상태 저장
          savedAnimationState.current = {
              position: [0, 0, 0],
              rotation: [broomRef.current.rotation.x, broomRef.current.rotation.y, broomRef.current.rotation.z],
          };
      }
  });

  // lightOn 값이 변경될 때마다 실행
  useEffect(() => {
      if (lightOn) {
          // lightOn이 true가 되면, 저장된 애니메이션 상태로 설정
          if (broomRef.current && broomContainerRef.current) {
              broomRef.current.position.set(...savedAnimationState.current.position);
              broomRef.current.rotation.set(...savedAnimationState.current.rotation);
          }
      }
  }, [lightOn]);
  
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
