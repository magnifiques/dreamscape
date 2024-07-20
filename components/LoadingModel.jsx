"use client";
import React from "react";
import { Html } from "@react-three/drei";
import { HashLoader } from "react-spinners";

const LoaderModel = () => {
  return (
    <Html
      fullscreen
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // Fade out when `fadeOut` is true
      }}
    >
      <div className="flex flex-col text-center justify-center items-center">
        <HashLoader size={50} color="#000" />
        {/* <div className="w-20 h-20 border-2 border-opacity-20 border-blue-500 border-t-blue-500 rounded-full animate-spin" /> */}
      </div>
    </Html>
  );
};

export default LoaderModel;
