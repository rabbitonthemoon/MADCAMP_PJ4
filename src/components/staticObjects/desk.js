import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

function Desk() {
    const { scene: deskScene } = useGLTF('../model/desk.glb');
    const { scene: chairScene } = useGLTF('../model/chair.glb');

    // 초기 위치 정보 제거
    const removeInitialPosition = (scene) => {
        scene.traverse((child) => {
            if (child.isMesh) {
                child.position.set(0, 0, 0); // 초기 위치를 0, 0, 0으로 설정 또는 원하는 값으로 설정
            }
        });
    };

    removeInitialPosition(deskScene);
    removeInitialPosition(chairScene);
  
    const desk1Ref = useRef();
    const desk2Ref = useRef();
    const chair1Ref = useRef();
    const chair2Ref = useRef();

    const deskContainerRef = useRef();
    
    useFrame(() => {
      // 각각의 오브젝트 위치와 크기 설정
      desk1Ref.current.position.set(1, 0, 0);
      desk1Ref.current.scale.set(4.5, 5, 5);

      desk2Ref.current.position.set(6, 0, 0);
      desk2Ref.current.scale.set(4.5, 5, 5);

      chair1Ref.current.position.set(1, 1, 2);
      chair1Ref.current.scale.set(5, 5, 5);

      chair2Ref.current.position.set(6, 1, 4);
      chair2Ref.current.scale.set(5, 5, 5);
      chair2Ref.current.rotation.set(0, Math.PI * 1.3, 0);

      deskContainerRef.current.position.set(-25, -86, -85);
      deskContainerRef.current.scale.set(10, 10, 10);
    });
  
    return (
      <>
        <group ref={deskContainerRef}>
          {/* 각 오브젝트를 primitive로 렌더링 */}
          <primitive object={deskScene.clone()} ref={desk1Ref} />
          <primitive object={deskScene.clone()} ref={desk2Ref} />
          <primitive object={chairScene.clone()} ref={chair1Ref} />
          <primitive object={chairScene.clone()} ref={chair2Ref} />
        </group>
      </>
    );
}
  
  export default Desk;