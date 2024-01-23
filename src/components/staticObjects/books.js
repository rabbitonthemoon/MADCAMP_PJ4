import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

function Books() {
    const { scene: booksScene } = useGLTF('../model/books.glb');

    // 초기 위치 정보 제거
    const removeInitialPosition = (scene) => {
        scene.traverse((child) => {
            if (child.isMesh) {
                child.position.set(0, 0, 0); // 초기 위치를 0, 0, 0으로 설정 또는 원하는 값으로 설정
            }
        });
    };

    removeInitialPosition(booksScene);
  
    const booksRef = useRef();

    const booksContainerRef = useRef();
    
    useFrame(() => {
      // 각각의 오브젝트 위치와 크기 설정
      booksRef.current.position.set(5, 0.7, 2);
      booksRef.current.scale.set(2, 2, 2);
      booksRef.current.rotation.set(0, 4, 0);

      booksContainerRef.current.position.set(0, -100, 30);
      booksContainerRef.current.scale.set(12, 12, 12);
    });
  
    return (
      <>
        <group ref={booksContainerRef}>
          {/* 각 오브젝트를 primitive로 렌더링 */}
          <primitive object={booksScene.clone()} ref={booksRef} />
        </group>
      </>
    );
}
  
  export default Books;