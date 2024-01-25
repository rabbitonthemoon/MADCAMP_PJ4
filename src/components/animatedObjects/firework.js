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

    const firework1Ref = useRef();
    const firework2Ref = useRef();

    const fireworkContainerRef = useRef();

    useFrame(({clock}) => {

        // 각각의 오브젝트 위치와 크기 설정
        firework1Ref.current.position.set(0, 0, 0);
        firework2Ref.current.position.set(-5, -1, 2);

        var scaleValue1 = 0;
        if (clock.getElapsedTime() % (2 * Math.PI) > Math.PI) {
            scaleValue1 = 0.5 * Math.cos(clock.getElapsedTime()) + 0.5;
        } else if (clock.getElapsedTime() % (2 * Math.PI) < Math.PI * 0.5) {
            scaleValue1 = 1;
        } else {
            scaleValue1 = 0;
        }

        var scaleValue2 = 0;
        if ((clock.getElapsedTime() - Math.PI *0.75) % (2 * Math.PI) > Math.PI) {
            scaleValue2 = 0.3 * Math.cos(clock.getElapsedTime() - Math.PI *0.75) + 0.3;
        } else if ((clock.getElapsedTime() - Math.PI * 0.75) % (2 * Math.PI) < Math.PI * 0.5) {
            scaleValue2 = 0.6;
        } else {
            scaleValue2 = 0;
        }

        firework1Ref.current.scale.set(scaleValue1, scaleValue1, scaleValue1); 
        firework2Ref.current.scale.set(scaleValue2, scaleValue2, scaleValue2); 

        fireworkContainerRef.current.position.set(-20, -40, -160);
        fireworkContainerRef.current.scale.set(5, 5, 5);
    });

    return (
        <>
            <group ref={fireworkContainerRef}>
                {/* 각 오브젝트를 primitive로 렌더링 */}
                <primitive object={fireworkScene.clone()} ref={firework1Ref} />
                <primitive object={fireworkScene.clone()} ref={firework2Ref} />
            </group>
        </>
    );
}

export default Firework;
