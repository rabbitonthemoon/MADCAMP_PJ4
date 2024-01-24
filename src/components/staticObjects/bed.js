import React, { useRef, useState } from 'react';
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

    const [radderPosition, setRadderPosition] = useState([2.5, -7, 0.7]);
    const [radderScale, setRadderScale] = useState([5, 5, 5]);

    const [bedding1Position, setBedding1Position] = useState([2.5, 1, -5]);
    const [bedding1Scale, setBedding1Scale] = useState([5, 5, 5]);

    const [bedding2Position, setBedding2Position] = useState([2.5, -5, -5]);
    const [bedding2Scale, setBedding2Scale] = useState([5, 5, 5]);

    const [bedMat1Position, setBedMat1Position] = useState([6.5, 0, -3.5]);
    const [bedMat1Scale, setBedMat1Scale] = useState([4.6, 5, 5]);

    const [bedMat2Position, setBedMat2Position] = useState([6.5, -6, -3.5]);
    const [bedMat2Scale, setBedMat2Scale] = useState([4.6, 5, 5]);

    const [bedFramePosition, setBedFramePosition] = useState([0, 0, 0]);
    const [bedFrameScale, setBedFrameScale] = useState([5, 5, 5]);

    const [beddingContainerPosition, setBeddingContainerPosition] = useState([-100, -40, -10]);
    const [beddingContainerScale, setBeddingContainerScale] = useState([10, 9, 8.5]);

    return (

      <>
      <group position={beddingContainerPosition} scale={beddingContainerScale}>
        <primitive object={radderScene.clone()} position={radderPosition} scale={radderScale} />
        <primitive object={beddingScene.clone()} position={bedding1Position} scale={bedding1Scale} />
        <primitive object={beddingScene.clone()} position={bedding2Position} scale={bedding2Scale} />
        <primitive object={bedMatScene.clone()} position={bedMat1Position} scale={bedMat1Scale} />
        <primitive object={bedMatScene.clone()} position={bedMat2Position} scale={bedMat2Scale} />
        <primitive object={bedFrameScene.clone()} position={bedFramePosition} scale={bedFrameScale} />
      </group>
    </>
    );
}
  
  export default Bed;