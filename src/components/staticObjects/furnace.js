import React, { useRef, useState } from 'react';
import { useGLTF } from '@react-three/drei';

function Furnace() {
    const { scene: furnaceScene } = useGLTF('../model/furnace.glb');

    // 초기 위치 정보 제거
    const removeInitialPosition = (scene) => {
        scene.traverse((child) => {
            if (child.isMesh) {
                child.position.set(0, 0, 0); // 초기 위치를 0, 0, 0으로 설정 또는 원하는 값으로 설정
            }
        });
    };

    removeInitialPosition(furnaceScene);
  
    const furnaceRef = useRef();

    const furnaceContainerRef = useRef();

    const [furnacePosition, setfurnacePosition] = useState([0, 0, 0]);
    const [furnaceScale, setfurnaceScale] = useState([2, 3, 2]);
    const [furnaceRotation, setfurnaceRotation] = useState([0, Math.PI, 0]);

    const [furnaceRefContainerPosition, setfurnaceRefContainerPosition] = useState([80, -30, -85]);
    const [furnaceRefContainerScale, setfurnaceRefContainerScale] = useState([1, 1, 1]);
  
  
    return (
      <>
        <group ref={furnaceContainerRef} position={furnaceRefContainerPosition} scale={furnaceRefContainerScale}>
          {/* 각 오브젝트를 primitive로 렌더링 */}
          <primitive object={furnaceScene.clone()} ref={furnaceRef} position={furnacePosition} scale={furnaceScale} rotation={furnaceRotation} />
        </group>
      </>
    );
}
  
  export default Furnace;