"use client";
import React, { useState, useEffect } from "react";
import { Html } from "@react-three/drei";
import { ClockLoader } from "react-spinners";

const Loader = ({ isLoading }) => {
  const [fadeOut, setFadeOut] = useState(false);
  useEffect(() => {
    if (!isLoading) {
      setFadeOut(true);
      const timer = setTimeout(() => {
        setFadeOut(false); // Hide the loader component after fade-out
      }, 6000); // Duration of fade-out transition
      return () => clearTimeout(timer);
    }
  }, [isLoading]);
  return (
    <Html
      fullscreen
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#DEAC80",
        transition: "opacity 1s ease-out",
        opacity: fadeOut ? 0 : 1,
        // Fade out when `fadeOut` is true
      }}
    >
      <div className="flex flex-col text-center justify-center items-center">
        <h3 className="font-bold text-yellow-950 text-lg lg:text-2xl py-6 lg:py-12">
          Loading Up the Dreamscape...
        </h3>
        <ClockLoader size={100} color="#fff" />
        {/* <div className="w-20 h-20 border-2 border-opacity-20 border-blue-500 border-t-blue-500 rounded-full animate-spin" /> */}
      </div>
    </Html>
  );
};

export default Loader;
