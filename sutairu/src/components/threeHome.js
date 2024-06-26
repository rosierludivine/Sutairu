import React, {Suspense} from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from "@react-three/drei";
import Img from '../Img';
import './three.css';

export default function ThreeSceneHome({ color }) {
    return (
      <Canvas>
      <ambientLight />
      <OrbitControls enableZoom={false} />
      <pointLight position-y={[0, 0, -2]} />
      <Suspense fallback={null}>
        <Img color={color} />
      </Suspense>
      <Environment preset="sunset" />
    </Canvas>
    );
  }

