import React, { useRef, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';


function BookRef() {
    const { scene: bookRefScene } = useGLTF('../model/opened-book.glb');

    // 초기 위치 정보 제거
    const removeInitialPosition = (scene) => {
        scene.traverse((child) => {
            if (child.isMesh) {
                child.position.set(0, 0, 0); // 초기 위치를 0, 0, 0으로 설정 또는 원하는 값으로 설정
            }
        });
    };

    removeInitialPosition(bookRefScene);
  
    const bookRef = useRef();

    const bookRefContainerRef = useRef();

    
    const [bookPosition, setbookPosition] = useState([0, 0, 0]);
    const [bookScale, setbookScale] = useState([40, 40, 40]);

    const [bookRefContainerPosition, setbookRefContainerPosition] = useState([-10, -50, -80]);
    const [bookRefContainerScale, setbookRefContainerScale] = useState([1, 1, 1]);

  
    return (
      <>
        <group ref={bookRefContainerRef} position={bookRefContainerPosition} scale={bookRefContainerScale}>
          {/* 각 오브젝트를 primitive로 렌더링 */}
          <primitive object={bookRefScene.clone()} ref={bookRef} position={bookPosition} scale={bookScale} />
        </group>
      </>
    );
}
  
  export default BookRef;