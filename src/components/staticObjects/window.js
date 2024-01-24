import React, { useRef, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';


function Window() {
    const { scene: windowScene } = useGLTF('../model/window.glb');

    // 초기 위치 정보 제거
    const removeInitialPosition = (scene) => {
        scene.traverse((child) => {
            if (child.isMesh) {
                child.position.set(0, 0, 0); // 초기 위치를 0, 0, 0으로 설정 또는 원하는 값으로 설정
            }
        });
    };

    removeInitialPosition(windowScene);
  
    const windowRef = useRef();

    const windowContainerRef = useRef();

    const [windowPosition, setwindowPosition] = useState([0, 0, 0]);
    const [windowScale, setwindowScale] = useState([5, 5, 5]);

    const [windowRefContainerPosition, setwindowRefContainerPosition] = useState([-18, -50, -103]);
    const [windowRefContainerScale, setwindowRefContainerScale] = useState([2.3, 2.3, 2]);
  
    return (
      <>
        <group ref={windowContainerRef} position={windowRefContainerPosition} scale={windowRefContainerScale}>
          {/* 각 오브젝트를 primitive로 렌더링 */}
          <primitive object={windowScene.clone()} ref={windowRef} position={windowPosition} scale={windowScale} />
        </group>
      </>
    );
}
  
  export default Window;