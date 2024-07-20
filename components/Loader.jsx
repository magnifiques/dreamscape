"use client";
import React from "react";
import { Html } from "@react-three/drei";
import { ClimbingBoxLoader } from "react-spinners";

const Loader = () => {
  return (
    <Html>
      <ClimbingBoxLoader size={15} color="#000" />
      {/* <div className="flex justify-center items-centers">
        <div className="w-20 h-20 border-2 border-opacity-20 border-blue-500 border-t-blue-500 rounded-full animate-spin" />
      </div> */}
    </Html>
  );
};

export default Loader;
