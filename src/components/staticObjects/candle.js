import React, { useRef, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';


function Candle() {
    const { scene: candleScene } = useGLTF('../model/candle.glb');

    // 초기 위치 정보 제거
    const removeInitialPosition = (scene) => {
        scene.traverse((child) => {
            if (child.isMesh) {
                child.position.set(0, 0, 0); // 초기 위치를 0, 0, 0으로 설정 또는 원하는 값으로 설정
            }
        });
    };

    removeInitialPosition(candleScene);
  
    const candleRef = useRef();

    const candleContainerRef = useRef();

    const [candlePosition, setcandlePosition] = useState([0, 0, 0]);
    const [candleScale, setcandleScale] = useState([50, 50, 50]);

    const [candleRefContainerPosition, setcandleRefContainerPosition] = useState([120, -70, -260]);
    const [candleRefContainerScale, setcandleRefContainerScale] = useState([1, 1, 1]);
  
  
    return (
      <>
        <group ref={candleContainerRef} position={candleRefContainerPosition} scale={candleRefContainerScale}>
          {/* 각 오브젝트를 primitive로 렌더링 */}
          <primitive object={candleScene.clone()} ref={candleRef} position={candlePosition} scale={candleScale} />
        </group>
      </>
    );
}
  
  export default Candle;