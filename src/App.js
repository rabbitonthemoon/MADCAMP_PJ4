import './App.css';

import React, { useState, useEffect } from 'react';
import Cat from './components/cat';
import Room from './components/room';
import CanvasSetup from './canvasSetup';

function App() {
  const [lightOn, setLightOn] = useState(true);

  useEffect(() => {
    console.log(`The light is now ${lightOn ? 'ON' : 'OFF'}.`);
  }, [lightOn]);

  return (
    <>
    <CanvasSetup>

      {/* 전역조명 */}
      <ambientLight intensity={lightOn ? 0.8 : 0} />

      {/* 특정 방향 조명 */}
      <directionalLight color='#FFF' intensity={lightOn ? 0.8 : 0} position={[0, 1, 0]} />

      {/* X 축 그리드 (Red) - XZ 평면 */}
      <gridHelper args={[200, 100, 'red', 'red']} position={[0, -100, 0]} rotation={[0, 0, 0]} />
      
      {/* Y 축 그리드 (Green) - XY 평면 */}
      <gridHelper args={[200, 100, 'green', 'green']} position={[-100, 0, 0]} rotation={[0, 0, Math.PI / 2]} />
      
      {/* Z 축 그리드 (Blue) - YZ 평면 */}
      <gridHelper args={[200, 100, 'blue', 'blue']} position={[0, 0, -100]} rotation={[Math.PI / 2, 0, 0]} />

      <Cat />
      <Room lightOn={lightOn} />
    </CanvasSetup>

    <button className="toggle-button" onClick={() => setLightOn(!lightOn)}>
        button
      </button>
    </>
  );
}

export default App;
