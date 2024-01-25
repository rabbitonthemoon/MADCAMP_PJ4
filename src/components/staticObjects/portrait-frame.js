import React, { useRef, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';


function Frame() {
    const { scene: frameScene } = useGLTF('../model/portrait-frame.glb');
    const { scene: portraitScene } = useGLTF('../model/portrait.glb');

    // 초기 위치 정보 제거
    const removeInitialPosition = (scene) => {
        scene.traverse((child) => {
            if (child.isMesh) {
                child.position.set(0, 0, 0); // 초기 위치를 0, 0, 0으로 설정 또는 원하는 값으로 설정
            }
        });
    };

    removeInitialPosition(frameScene);
  
    const frameRef = useRef();
    const portraitRef = useRef();

    const frameContainerRef = useRef();

    const [framePosition, setframePosition] = useState([0, 0, 0]);
    const [frameScale, setframeScale] = useState([5, 5, 5]);
    const [frameRotation, setframeRotation] = useState([0, - Math.PI / 2, 0]);

    const [frameRefContainerPosition, setframeRefContainerPosition] = useState([40, -10, -100]);
    const [frameRefContainerScale, setframeRefContainerScale] = useState([5, 5, 5]);

    useFrame(({ clock }) => {
      portraitRef.current.position.set(0, 0, 0);
      portraitRef.current.scale.set(15, 15, 15);
      
       // GLTF 모델의 모든 재질에 대해 반복
      portraitScene.traverse((child) => {
        if (child.isMesh) {
          // child.material이 배열일 경우에 대비하여 반복 처리
          if (Array.isArray(child.material)) {
            child.material.forEach((material) => {
              if (material && material.opacity !== undefined) {
                // emissive 속성이 있는 경우, 밝기를 조절
                material.opacity = Math.abs(Math.sin(0.5 * clock.getElapsedTime()));
                material.transparent = true;
              }
            });
          } else if (child.material && child.material.opacity !== undefined) {
            // 하나의 재질만 있는 경우
            // child.material.opacity = Math.max(0, child.material.opacity - 0.005);
            child.material.opacity = Math.abs(Math.sin(0.5 * clock.getElapsedTime()));
            child.material.transparent = true;
          }
        }
      });
    });
    
    return (
      <>
        <group ref={frameContainerRef} position={frameRefContainerPosition} scale={frameRefContainerScale}>
          {/* 각 오브젝트를 primitive로 렌더링 */}
          <primitive object={frameScene.clone()} ref={frameRef} position={framePosition} scale={frameScale} rotation={frameRotation} />
          <primitive object={portraitScene.clone()} ref={portraitRef} />
        </group>
      </>
    );
}
  
  export default Frame;