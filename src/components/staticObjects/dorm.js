import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box } from '@react-three/drei';

function Dorm() {
  const wall1Ref = useRef();
  const floorRef = useRef();
//   const ceilingRef = useRef();

  const wall21Ref = useRef();
  const wall22Ref = useRef();
  const wall23Ref = useRef();
  const wall24Ref = useRef();

  const wall2ContainerRef = useRef();
  const dormContainerRef = useRef();

  useFrame(() => {

  });

  return (
    <>
    <group ref={dormContainerRef}>
        <Box ref={wall1Ref} args={[10, 180, 210]} position={[-105, -20, -5]}>
            <meshStandardMaterial color={'#730800'} /> 
        </Box>
        <group ref={wall2ContainerRef}>
            <Box ref={wall21Ref} args={[200, 40, 10]} position={[0, 50, -105]}>
                <meshStandardMaterial color={'#730800'} />
            </Box>
            <Box ref={wall22Ref} args={[200, 60, 10]} position={[0, -80, -105]}>
                <meshStandardMaterial color={'#730800'} />
            </Box>
            <Box ref={wall23Ref} args={[55, 80, 10]} position={[-80, -10, -105]}>
                <meshStandardMaterial color={'#730800'} />
            </Box>
            <Box ref={wall24Ref} args={[85, 80, 10]} position={[57.5, -10, -105]}>
                <meshStandardMaterial color={'#730800'} />
            </Box>
        </group>
        <Box ref={floorRef} args={[200, 10, 200]} position={[0, -105, 0]}>
            <meshStandardMaterial color={'#1f160b'} /> 
        </Box>
        {/* <Box ref={ceilingRef} args={[100, 100, 100]} position={[0, 0, 0]}>
            <meshStandardMaterial color={'#61dafb'} />
        </Box> */}
    </group>
    </>

  );
};
  
  export default Dorm;