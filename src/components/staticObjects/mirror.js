import React, { useRef, useState } from 'react';
import { useGLTF } from '@react-three/drei';


function Mirror() {
    const { scene: mirrorScene } = useGLTF('../model/mirror.glb');

    // 초기 위치 정보 제거
    const removeInitialPosition = (scene) => {
        scene.traverse((child) => {
            if (child.isMesh) {
                child.position.set(0, 0, 0); // 초기 위치를 0, 0, 0으로 설정 또는 원하는 값으로 설정
            }
        });
    };

    removeInitialPosition(mirrorScene);
  
    const mirrorRef = useRef();

    const mirrorContainerRef = useRef();

    
    const [mirrorPosition, setmirrorPosition] = useState([-5, 0, -12]);
    const [mirrorScale, setmirrorScale] = useState([0.6, 0.82, 0.7]);
    const [mirrorRotation, setmirrorRotation] = useState([0, Math.PI /3  , 0]);

    const [mirrorRefContainerPosition, setmirrorRefContainerPosition] = useState([0, -100, 80]);
    const [mirrorRefContainerScale, setmirrorRefContainerScale] = useState([50, 50, 50]);

  
    return (
      <>
        <group ref={mirrorContainerRef} position={mirrorRefContainerPosition} scale={mirrorRefContainerScale}>
          {/* 각 오브젝트를 primitive로 렌더링 */}
          <primitive object={mirrorScene.clone()} ref={mirrorRef} position={mirrorPosition} scale={mirrorScale} rotation={mirrorRotation} />
        </group>
      </>
    );
}
  
  export default Mirror;