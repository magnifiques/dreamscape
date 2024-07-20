"use client";
import React, { useRef } from "react";
import oreoScene from "../assets/oreo.glb";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Oreo = (props) => {
  const oreo = useGLTF(oreoScene);
  const oreoRef = useRef();

  // Define parameters for bounce and rotation
  const bounceSpeed = 0.5; // Speed of bounce (affects frequency)
  const bounceHeight = 0.3; // Height of the bounce
  const rotationSpeed = 0.001;

  useFrame((state) => {
    const elapsedTime = state.clock.getElapsedTime();
    if (oreoRef.current) {
      // Bounce effect
      oreoRef.current.rotation.y += rotationSpeed;
      const y = Math.sin(elapsedTime * bounceSpeed) * bounceHeight;
      oreoRef.current.position.y = -1.5 + y;
    }
  });

  return (
    <mesh
      {...props}
      ref={oreoRef}
      scale={1.8}
      rotation={[Math.PI * 0.02, 0, 0]}
      position={[0, -1.5, 0.4]}
    >
      <primitive object={oreo.scene} />
    </mesh>
  );
};

export default Oreo;
