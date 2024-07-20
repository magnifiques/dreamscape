"use client";
import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { Vector3 } from "three";
import balloonScene from "../assets/balloon.glb";

// 3D Model from: https://sketchfab.com/3d-models/phoenix-bird-844ba0cf144a413ea92c779f18912042
export default function Balloon() {
  const balloonRef = useRef();

  const orbitRef = useRef();
  // Load the 3D model from the provided GLTF file
  const balloon = useGLTF(balloonScene);
  const initialY = -1.8;

  // Define the radius of the orbit
  const radius = 10;
  // Define the speed of rotation (radians per second)
  const speed = 0.2;

  useFrame((state, delta) => {
    const elapsedTime = state.clock.getElapsedTime();
    // Calculate the new position on the circular path
    const x = radius * Math.cos(elapsedTime * speed);
    const z = radius * Math.sin(elapsedTime * speed);

    // Update the position of the balloon
    balloonRef.current.position.set(
      x,
      initialY + Math.sin(elapsedTime) * 0.5,
      z
    );

    // Optional: Rotate the balloon itself for a more dynamic effect
    balloonRef.current.rotation.y += delta;
  });

  return (
    // Create and display 3D objects
    <mesh ref={balloonRef} position={[radius, initialY, -10]} scale={[1, 1, 1]}>
      <primitive object={balloon.scene} />
    </mesh>
  );
}
