import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

function Firework() {
    // useGLTF 훅을 사용하여 GLTF 모델과 애니메이션을 가져옴
    const { scene: fireworkScene, animations } = useGLTF('../model/fireworks2.glb');

    // 초기 위치 정보 제거
    const removeInitialPosition = (scene) => {
        scene.traverse((child) => {
            if (child.isMesh) {
                child.position.set(0, 0, 0); // 초기 위치를 0, 0, 0으로 설정 또는 원하는 값으로 설정
            }
        });
    };

    removeInitialPosition(fireworkScene);

    const fireworkRef = useRef();

    const fireworkContainerRef = useRef();

    useFrame((state, delta) => {

        // 각각의 오브젝트 위치와 크기 설정
        fireworkRef.current.position.set(0, 0, 0);
        fireworkRef.current.scale.set(1, 1, 1);
        // fireworkRef.current.rotation.set(0, Math.PI / 2, 0);

        fireworkContainerRef.current.position.set(-20, -40, -160);
        fireworkContainerRef.current.scale.set(5, 5, 5);
    });

    return (
        <>
            <group ref={fireworkContainerRef}>
                {/* 각 오브젝트를 primitive로 렌더링 */}
                <primitive object={fireworkScene.clone()} ref={fireworkRef} />
            </group>
        </>
    );
}

export default Firework;
