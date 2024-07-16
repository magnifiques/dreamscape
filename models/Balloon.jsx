"use client";
import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import balloonScene from "../assets/balloon.glb";

// 3D Model from: https://sketchfab.com/3d-models/phoenix-bird-844ba0cf144a413ea92c779f18912042
export default function Balloon() {
  const balloonRef = useRef();
  const groupRef = useRef();
  const { camera } = useThree();

  // Load the 3D model from the provided GLTF file
  const balloon = useGLTF(balloonScene);
  const initialY = 10.8;

  useFrame((state, delta) => {
    const elapsedTime = state.clock.getElapsedTime();
    // Create a floating effect by updating the Y position over time
    balloonRef.current.position.y = initialY + Math.sin(elapsedTime) * 0.5;
  });

  return (
    // Create and display 3D objects
    <mesh ref={balloonRef} position={[5, 18, -20]} scale={[1, 1, 1]}>
      <primitive object={balloon.scene} />
    </mesh>
  );
}
