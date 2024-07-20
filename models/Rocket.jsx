"use client";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import rocketScene from "../assets/rocket.glb";

export default function Rocket() {
  const rocketRef = useRef();

  // Load the 3D model from the provided GLTF file
  const rocket = useGLTF(rocketScene);

  const speed = 0.5; // Speed of the rocket
  const initialY = -10.4; // Starting position (bottom of the screen)
  const endY = 10; // Ending position (top of the screen)
  const rotationSpeed = 0.18; // Speed of the rocket's rotation

  useFrame((state) => {
    const elapsedTime = state.clock.getElapsedTime();
    // Calculate the new Y position
    const y = initialY + ((elapsedTime * speed) % (endY - initialY));

    // Update the position of the rocket
    if (rocketRef.current) {
      rocketRef.current.position.set(10, y, -4);
      rocketRef.current.rotation.y = elapsedTime * rotationSpeed;
    }
  });

  return (
    // Create and display 3D objects
    <mesh ref={rocketRef} position={[0, initialY, 0]} scale={[5, 5, 5]}>
      <primitive object={rocket.scene} />
    </mesh>
  );
}

useGLTF.preload(rocketScene);
