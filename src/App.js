import './App.css';

import React from 'react';
import Cat from './components/cat';
import Room from './components/room';
import CanvasSetup from './canvasSetup';
import Bed from './components/staticObjects/bed'
import Desk from './components/staticObjects/desk'
import Furnace from './components/staticObjects/furnace'

function App() {

  return (
    <CanvasSetup>
      <ambientLight intensity={0.9} />
      <directionalLight color='#FFF' position={[0, 1, 0]} />

      {/* X 축 그리드 (Red) - XZ 평면 */}
      <gridHelper args={[200, 100, 'red', 'red']} position={[0, -100, 0]} rotation={[0, 0, 0]} />
      
      {/* Y 축 그리드 (Green) - XY 평면 */}
      <gridHelper args={[200, 100, 'green', 'green']} position={[-100, 0, 0]} rotation={[0, 0, Math.PI / 2]} />
      
      {/* Z 축 그리드 (Blue) - YZ 평면 */}
      <gridHelper args={[200, 100, 'blue', 'blue']} position={[0, 0, -100]} rotation={[Math.PI / 2, 0, 0]} />

      {/* <Cat />
      <Room /> */}
      <Bed/>
      <Desk/>
      <Furnace/>
    </CanvasSetup>
  );
}

export default App;

