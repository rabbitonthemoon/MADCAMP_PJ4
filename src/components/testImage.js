import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { TextureLoader } from 'three';
import seedrandom from 'seedrandom';

const Photo = () => {
  const meshRef = useRef();

  // useFrame을 사용하여 매 프레임마다 특정 동작을 수행할 수 있습니다.
  useFrame(() => {
    // 여기에 원하는 프레임마다 수행할 작업을 추가할 수 있습니다.
  });

  const position = [30, -50, -30];
  const scale = [50, 50, 50];


  // // 사용 가능한 이미지 경로 목록
  const imagePaths = ['/dorm1.png', '/dorm2.png', '/dorm3.png', '/dorm4.png'];

  // 랜덤으로 이미지 경로 선택
  // 현재 시간을 seed로 사용
  const seed = new Date().getTime();
  console.log(seed);

  // seed를 설정
  const rng = seedrandom(seed);
  const randomImageIndex = Math.floor(rng() * imagePaths.length);

  const imagePath = imagePaths[randomImageIndex];

  // 이미지를 불러오는 TextureLoader를 사용하여 텍스처를 생성합니다.
  const texture = new TextureLoader().load(imagePath);

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial map={texture} transparent />
    </mesh>
  );
};

export default Photo;