import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';


function Owl({ lightOn }) {
    const { scene: owlScene } = useGLTF('../model/owl.glb');
    const owlRef = useRef();
    const owlContainerRef = useRef();
    const savedAnimationState = useRef({ position: [0, 0, 0], rotation: [0, 0, 0] }); 

    // 초기 위치 정보 제거
    const removeInitialPosition = (scene) => {
        scene.traverse((child) => {
            if (child.isMesh) {
                child.position.set(0, 0, 0); // 초기 위치를 0, 0, 0으로 설정 또는 원하는 값으로 설정
            }
        });
    };

    removeInitialPosition(owlScene);

    useFrame(({clock}) => {
      // 각각의 오브젝트 위치와 크기 설정
      owlRef.current.scale.set(5, 5, 5);
      owlContainerRef.current.position.set(-48, 13, -25);
      owlContainerRef.current.scale.set(5, 5, 5);
      
      if(!lightOn){
        // Easing function for jumping
        const jumpDuration = 2; // Duration of one complete jump cycle
        const jumpHeight = 4;
        const t = (clock.getElapsedTime() % jumpDuration) / jumpDuration; // Normalized time between 0 and 1
        const easeInOut = t => t < 0.5 ? 4 * t * t : -1 + (4 - 2 * t) * t; // Modified ease-in-out function
        const easedT = easeInOut(t);

        // Adjust the position using the easedT value for both ascent and descent
        if (easedT <= 0.5) {
          owlRef.current.position.y = easedT * jumpHeight * 2; // Ascent
        } else {
          owlRef.current.position.y = (1 - easedT) * jumpHeight * 2; // Descent
        }

        // 현재 애니메이션 상태 저장
        savedAnimationState.current = {
          position: [owlRef.current.position.x, owlRef.current.position.y, owlRef.current.position.z],
          rotation: [owlRef.current.rotation.x, owlRef.current.rotation.y, owlRef.current.rotation.z],
        };
      } else {
        // lightOn이 true일 때 애니메이션 상태 복원
        owlRef.current.position.set(...savedAnimationState.current.position);
        owlRef.current.rotation.set(...savedAnimationState.current.rotation);
      }
  
    });
    // lightOn 값이 변경될 때마다 실행
    useEffect(() => {
      if (lightOn) {
          savedAnimationState.current = {
            position: [owlRef.current.position.x, owlRef.current.position.y, owlRef.current.position.z],
            rotation: [owlRef.current.rotation.x, owlRef.current.rotation.y, owlRef.current.rotation.z],
          };
      }
  }, [lightOn]);
  
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