"use client";
import React, { useRef } from "react";
import sundaeScene from "../assets/sundae.glb";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Sundae = (props) => {
  const sundae = useGLTF(sundaeScene);
  const sundaeRef = useRef();

  // Define parameters for bounce and rotation
  const bounceSpeed = 0.5; // Speed of bounce (affects frequency)
  const bounceHeight = 0.3; // Height of the bounce

  useFrame((state) => {
    const elapsedTime = state.clock.getElapsedTime();
    if (sundaeRef.current) {
      // Bounce effect
      const y = Math.sin(elapsedTime * bounceSpeed) * bounceHeight;
      sundaeRef.current.position.y = -1.5 + y;
    }
  });

  return (
    <mesh
      {...props}
      ref={sundaeRef}
      scale={0.4}
      rotation={[Math.PI * 0.02, 0, 0]}
      position={[0, -1.5, 0.4]}
    >
      <primitive object={sundae.scene} />
    </mesh>
  );
};

export default Sundae;
