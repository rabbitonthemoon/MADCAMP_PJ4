import React, { useRef, useState } from 'react';
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

    const [booksPosition, setbooksPosition] = useState([5, 0.7, 2]);
    const [booksScale, setbooksScale] = useState([2, 2, 2]);
    const [booksRotation, setbooksRotation] = useState([0, 4, 0]);

    const [booksRefContainerPosition, setbookRefContainerPosition] = useState([0, -100, 30]);
    const [booksRefContainerScale, setbookRefContainerScale] = useState([12, 12, 12]);
  
    return (
      <>
        <group ref={booksContainerRef} position={booksRefContainerPosition} scale={booksRefContainerScale}>
          {/* 각 오브젝트를 primitive로 렌더링 */}
          <primitive object={booksScene.clone()} ref={booksRef} position={booksPosition} scale={booksScale} rotation={booksRotation} />
        </group>
      </>
    );
}
  
  export default Books;