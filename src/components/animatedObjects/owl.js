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
    
    useFrame(({clock}) => {
      // 각각의 오브젝트 위치와 크기 설정
      // TODO: position, rotation, scale에 animation
      // e.g. catRef.current.position.x = 30 * Math.sin(clock.getElapsedTime() * 3);
      // owlRef.current.position.set(0, 0, 0);
      owlRef.current.scale.set(5, 5, 5);
    //   owlRef.current.rotation.set(0, Math.PI / 2, 0);

      // Easing function for jumping
      const jumpDuration = 2; // Duration of one complete jump cycle
      const jumpHeight = 4;
      const t = (clock.getElapsedTime() % jumpDuration) / jumpDuration; // Normalized time between 0 and 1
      const easeInOut = t =>
        t < 0.5 ? 4 * t * t : -1 + (4 - 2 * t) * t; // Modified ease-in-out function
      const easedT = easeInOut(t);

      owlRef.current.position.x = 0;
      owlRef.current.position.z = 0;

      // Adjust the position using the easedT value for both ascent and descent
      if (easedT <= 0.5) {
        owlRef.current.position.y = easedT * jumpHeight * 2; // Ascent
      } else {
        owlRef.current.position.y = (1 - easedT) * jumpHeight * 2; // Descent
      }

      owlContainerRef.current.position.set(-48, 13, -25);
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