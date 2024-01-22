import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

function Bed() {
    const { scene: radderScene } = useGLTF('../model/radder.glb');
    const { scene: beddingScene } = useGLTF('../model/bedding.glb');
    const { scene: bedFrameScene } = useGLTF('../model/bed-frame.glb');
    const { scene: bedMatScene } = useGLTF('../model/bed-mat.glb');

    // 초기 위치 정보 제거
    const removeInitialPosition = (scene) => {
        scene.traverse((child) => {
            if (child.isMesh) {
                child.position.set(0, 0, 0); // 초기 위치를 0, 0, 0으로 설정 또는 원하는 값으로 설정
            }
        });
    };

    removeInitialPosition(radderScene);
    removeInitialPosition(beddingScene);
    removeInitialPosition(bedFrameScene);
    removeInitialPosition(bedMatScene);
  
    const radderRef = useRef();
    const bedding1Ref = useRef();
    const bedding2Ref = useRef();
    const bedFrameRef = useRef();
    const bedMat1Ref = useRef();
    const bedMat2Ref = useRef();

    const beddingContainerRef = useRef();
    
    useFrame(() => {
      // 각각의 오브젝트 위치와 크기 설정
      radderRef.current.position.set(2.5, -7, 0.7);
      radderRef.current.scale.set(5, 5, 5);

      bedding1Ref.current.position.set(2.5, 1, -5);
      bedding1Ref.current.scale.set(5, 5, 5);

      bedding2Ref.current.position.set(2.5, -5, -5);
      bedding2Ref.current.scale.set(5, 5, 5);

      bedMat1Ref.current.position.set(6.5, 0, -3.5);
      bedMat1Ref.current.scale.set(4.6, 5, 5);

      bedMat2Ref.current.position.set(6.5, -6, -3.5);
      bedMat2Ref.current.scale.set(4.6, 5, 5);

      bedFrameRef.current.position.set(0, 0, 0);
      bedFrameRef.current.scale.set(5, 5, 5);

      beddingContainerRef.current.position.set(-100, -50, -25);
      beddingContainerRef.current.scale.set(7, 7, 7);
    });
  
    return (
      <>
        <group ref={beddingContainerRef}>
          {/* 각 오브젝트를 primitive로 렌더링 */}
          <primitive object={radderScene.clone()} ref={radderRef} />
          <primitive object={beddingScene.clone()} ref={bedding1Ref} />
          <primitive object={beddingScene.clone()} ref={bedding2Ref} />
          <primitive object={bedMatScene.clone()} ref={bedMat1Ref} />
          <primitive object={bedMatScene.clone()} ref={bedMat2Ref} />
          <primitive object={bedFrameScene.clone()} ref={bedFrameRef} />
        </group>
      </>
    );
}
  
  export default Bed;