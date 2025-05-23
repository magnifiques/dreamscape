"use client";
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: leoni (https://sketchfab.com/leoni)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/hot-air-balloon-4b6c2073c9724440ae5da71ba19f05e8
Title: Hot Air Balloon
*/

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import balloon3Model from "../assets/balloon3.glb";

export default function Balloon3(props) {
  const balloon3 = useGLTF(balloon3Model);
  const balloon3Ref = useRef();

  const initialY = 3.8;

  // Define the radius of the circular path
  const radius = 40;
  // Define the speed of rotation (radians per second)
  const speed = 0.08;

  useFrame((state) => {
    const elapsedTime = state.clock.getElapsedTime();
    // Calculate the new position on the circular path for counterclockwise rotation
    const x = radius * Math.sin(elapsedTime * speed);
    const z = radius * Math.cos(elapsedTime * speed);

    // Update the position of the balloon
    if (balloon3Ref.current) {
      balloon3Ref.current.position.set(x, initialY, z);
    }
  });

  return (
    <mesh ref={balloon3Ref} position={[0, initialY, 0]} scale={[0.5, 0.5, 0.5]}>
      <primitive object={balloon3.scene} />
    </mesh>
  );
}

useGLTF.preload(balloon3Model);
