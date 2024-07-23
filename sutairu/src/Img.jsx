/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 img.gltf 
Author: chop24 (https://sketchfab.com/chop24)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/hoodie-with-hood-up-237449b193714dfaa13b9a4d9d2b9a90
Title: Hoodie with hood up
*/

import React, {useEffect, useMemo} from 'react'
import { useGLTF } from '@react-three/drei';
import { BoxGeometry } from 'three';
import { Color, TextureLoader, MeshBasicMaterial } from 'three';
import TextTexture from './components/TextTexture';
import { CanvasTexture } from 'three/src/textures/CanvasTexture';

export default function Img({ color, updateImgColor,text,logoImage,Text, ...props }) {
  console.log('Img color:', color);

  const { nodes, materials } = useGLTF('/img.gltf');
  useEffect(() => {
    if (materials['Material238904.005']) {
      materials['Material238904.005'].color.set(new Color(color));
    }
  }, [color, materials]);

  const textTexture = useMemo(() => TextTexture(text, color), [text, color]);

  return (
    <group {...props} dispose={null} scale={6}>
      
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials['Material238904.005']} position={[0, 0, -1.5]}>
          <meshBasicMaterial map={textTexture} polygonOffset polygonOffsetFactor={-1}/>
        </mesh>
        <mesh geometry={nodes.Object_3.geometry} material={materials['Material238904.005']} position={[0, 0, -1.5]}>
          <meshBasicMaterial map={textTexture} polygonOffset polygonOffsetFactor={-1}/>
        </mesh>
        <mesh geometry={nodes.Object_4.geometry} material={materials['Material238904.005']} position={[0, 0, -1.5]}>
          <meshBasicMaterial map={textTexture} polygonOffset polygonOffsetFactor={-1}/>
        </mesh>
        <mesh geometry={nodes.Object_5.geometry} material={materials['Material238904.005']} position={[0, 0, -1.5]}>
          <meshBasicMaterial map={textTexture} polygonOffset polygonOffsetFactor={-1}/>
        </mesh>
        <primitive object={new BoxGeometry(1, 1, 1)} />
        {text && (
          <Text
            color="#000000"
            fontSize={0.5}
            position={[0, 0.5, -1.5]}
            anchorX="center"
            anchorY="middle"
          >
            {text}
          </Text>
        )}
      </group>
    </group>
  )
}

useGLTF.preload('/img.gltf')
