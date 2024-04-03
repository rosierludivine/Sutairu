import React, { useState, Suspense} from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from "@react-three/drei";
import Img from '../Img';
import './three.css'

export default function ThreeScene() {
    const [count, setCount] = useState(0);
    return (
      <Canvas>
        <ambientLight />
        <OrbitControls enableZoom={false}/>
        <pointLight position-y={-2} />
        <Suspense fallback={null}>
            <group scale={[6, 3, 3]}>
            <Img />
            </group>
        </Suspense>
        <Environment preset='sunset' />
      </Canvas>
    );
  }


