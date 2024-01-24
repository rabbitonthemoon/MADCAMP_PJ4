import React, {useRef, useEffect} from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { CameraControls } from '@react-three/drei';

const CanvasSetup = ({ children }) => {
  // const camera = useThree();
  const controlsRef = useRef();

  // 키보드 이벤트를 감지하는 함수
  function handleKeyDown(event) {
    switch (event.code) {
      default:
        break;
      case "KeyW":
        // 전진
        controlsRef.current.moveForward = true;
        break;
      case "KeyA":
        // 좌측 이동
        controlsRef.current.moveLeft = true;
        break;
      case "KeyS":
        // 후진
        controlsRef.current.moveBackward = true;
        break;
      case "KeyD":
        // 우측 이동
        controlsRef.current.moveRight = true;
        break;
      case "Space":
        // 상승
        controlsRef.current.moveUp = true;
        break;
      case "ShiftLeft":
        // 하강
        controlsRef.current.moveDown = true;
        break;
    }
  }

  // 키보드 이벤트를 감지하는 함수
  function handleKeyUp(event) {
    switch (event.code) {
      default:
        break;
      case "KeyW":
        controlsRef.current.moveForward = false;
        break;
      case "KeyA":
        controlsRef.current.moveLeft = false;
        break;
      case "KeyS":
        controlsRef.current.moveBackward = false;
        break;
      case "KeyD":
        controlsRef.current.moveRight = false;
        break;
      case "Space":
        controlsRef.current.moveUp = false;
        break;
      case "ShiftLeft":
        controlsRef.current.moveDown = false;
        break;
    }
  }

  // useEffect를 사용하여 이벤트 리스너 등록
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    // 컴포넌트가 언마운트되면 이벤트 리스너 제거
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 실행

  useFrame(() => {
    // 여기에 특정 조건을 추가하여 키보드 입력에 따라 카메라 이동을 처리합니다.
    // 예를 들어, W, A, S, D 키를 사용하여 전/후진 및 좌/우 이동을 처리할 수 있습니다.

    // controlsRef.current.moveForward();
    // controlsRef.current.moveBackward();
    // controlsRef.current.moveLeft();
    // controlsRef.current.moveRight();
  });


  return (
    // <div></div>
    <Canvas
      style={{ width: '100%', height: '100vh', background: '#030036' }}
      camera={{ position: [200, 200, 200] }}
    >
      <CameraControls
        ref={controlsRef}
        minPolarAngle={0}      // 최소 위도 (라디안)
        maxPolarAngle={Math.PI / 2}  // 최대 위도 (라디안)
        minAzimuthAngle={-Math.PI}  // 최소 방위각 (라디안)
        maxAzimuthAngle={Math.PI}   // 최대 방위각 (라디안)
      />
      {children}
    </Canvas>
  );
}

export default CanvasSetup;
