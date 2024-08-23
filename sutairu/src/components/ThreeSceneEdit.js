import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import Img from '../Img';
import Tshirt from '../Tshirt';
import './three.css';

export default function ThreeSceneEdit({ choice, color, text }) {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <OrbitControls enableZoom={true} />
      <Suspense fallback={<span>Loading...</span>}>
        {choice === 'Hoodie' ? <Img color={color} text={text} /> : null}
        {choice === 'T-shirt' ? <Tshirt color={color} text={text} /> : null}
      </Suspense>
      <Environment preset="sunset" />
    </Canvas>
  );
}
