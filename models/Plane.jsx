"use client";
import React, { useEffect, useRef } from "react";
import planeScene from "../assets/3d/plane.glb";
import { useAnimations, useGLTF } from "@react-three/drei";

const Plane = ({ isRotating, ...props }) => {
  const plane = useGLTF(planeScene);
  const ref = useRef();
  const { actions } = useAnimations(plane.animations, ref);

  useEffect(() => {
    if (isRotating) {
      actions["Take 001"].play();
    } else {
      // actions["Take 001"].stop();
    }
  }, [actions, isRotating]);
  return (
    <mesh {...props} ref={ref}>
      <primitive object={plane.scene} />
    </mesh>
  );
};

export default Plane;
