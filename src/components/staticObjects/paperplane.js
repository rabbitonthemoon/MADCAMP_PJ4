import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

function Paperplane({ lightOn }) {
    const { scene: paperplaneScene } = useGLTF('../model/paper-plane.glb');
    const paperplane1Ref = useRef();
    const paperplane2Ref = useRef();
    const paperplaneContainerRef = useRef();
    // const savedAnimationState = useRef({ position: [0, 0, 0], rotation: [0, 0, 0] }); 
    const savedAnimationState1 = useRef({ position: [0, 0, 0], rotation: [0, 0, 0] }); 
    const savedAnimationState2 = useRef({ position: [0, 0, 0], rotation: [0, 0, 0] }); 


    // 초기 위치 정보 제거
    const removeInitialPosition = (scene) => {
        scene.traverse((child) => {
            if (child.isMesh) {
                child.position.set(0, 0, 0); // 초기 위치를 0, 0, 0으로 설정 또는 원하는 값으로 설정
            }
        });
    };

    removeInitialPosition(paperplaneScene);
    
    useFrame(({ clock }) => {
      // 각각의 오브젝트 위치와 크기 설정
      paperplane1Ref.current.scale.set(0.5, 0.5, 0.5);
      paperplane2Ref.current.scale.set(0.5, 0.5, 0.5);

      paperplaneContainerRef.current.position.set(0, -100, 30);
      paperplaneContainerRef.current.scale.set(12, 12, 12);

      if (!lightOn) {
        paperplane1Ref.current.position.x = 3 * Math.sin(2 * clock.getElapsedTime()) + 4;
        paperplane1Ref.current.position.z = 2 * Math.cos(2 * clock.getElapsedTime()) - 3;
        paperplane1Ref.current.position.y = Math.sin(2 * clock.getElapsedTime()) + 2;
        paperplane1Ref.current.rotation.set(0, 2 * clock.getElapsedTime(), 0);

        paperplane2Ref.current.position.x = 2 * Math.sin(- clock.getElapsedTime()) + 6;
        paperplane2Ref.current.position.z = 3 * Math.cos(- clock.getElapsedTime()) - 4;
        paperplane2Ref.current.position.y = 2 * Math.sin(- clock.getElapsedTime()) + 3;
        paperplane2Ref.current.rotation.set(0, - clock.getElapsedTime() + Math.PI, 0);
        // lightOn이 false일 때 애니메이션 상태 저장
        savedAnimationState1.current = {
          position: [paperplane1Ref.current.position.x, paperplane1Ref.current.position.y, paperplane1Ref.current.position.z],
          rotation: [paperplane1Ref.current.rotation.x, paperplane1Ref.current.rotation.y, paperplane1Ref.current.rotation.z],
        };
        savedAnimationState2.current = {
          position: [paperplane2Ref.current.position.x, paperplane2Ref.current.position.y, paperplane2Ref.current.position.z],
          rotation: [paperplane2Ref.current.rotation.x, paperplane2Ref.current.rotation.y, paperplane2Ref.current.rotation.z],
        };
      } 
    });

    useEffect(() => {
      if (lightOn) {
        paperplane1Ref.current.position.set(...savedAnimationState1.current.position);
        paperplane1Ref.current.rotation.set(...savedAnimationState1.current.rotation);
        paperplane2Ref.current.position.set(...savedAnimationState2.current.position);
        paperplane2Ref.current.rotation.set(...savedAnimationState2.current.rotation);

      }
    }, [lightOn]);

    return (
      <>
        <group ref={paperplaneContainerRef}>
          {/* 각 오브젝트를 primitive로 렌더링 */}
          <primitive object={paperplaneScene.clone()} ref={paperplane1Ref} />
          <primitive object={paperplaneScene.clone()} ref={paperplane2Ref} />
        </group>
      </>
    );
}
  
  export default Paperplane;