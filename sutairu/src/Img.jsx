/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 img.gltf 
Author: chop24 (https://sketchfab.com/chop24)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/hoodie-with-hood-up-237449b193714dfaa13b9a4d9d2b9a90
Title: Hoodie with hood up
*/

import React from 'react'
import { useGLTF } from '@react-three/drei';

export default function Model(props) {
  const { nodes, materials } = useGLTF('/img.gltf');
  return (
    <group {...props} dispose={null} scale={4}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials['Material238904.005']} position={[0, 0, -1.5]} />
        <mesh geometry={nodes.Object_3.geometry} material={materials['Material238904.005']} position={[0, 0, -1.5]}/>
        <mesh geometry={nodes.Object_4.geometry} material={materials['Material238904.005']} position={[0, 0, -1.5]}/>
        <mesh geometry={nodes.Object_5.geometry} material={materials['Material238904.005']} position={[0, 0, -1.5]}/>
      </group>
    </group>
  )
}

useGLTF.preload('/img.gltf')
