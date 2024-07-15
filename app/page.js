"use client";

import Navbar from "@/components/Navbar";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import Loader from "@/components/Loader";
import Island from "@/models/Island";
import Sky from "@/models/Sky";
import Plane from "@/models/Plane";
import Bird from "@/models/Bird";

export default function Home() {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  const adjustIslandScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -30];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenPosition, screenScale, rotation];
  };

  const [isLandPosition, islandScale, islandRotation] =
    adjustIslandScreenSize();

  const adjustPlaneScreenSize = () => {
    let screenScale = null;
    let screenPosition = null;
    // let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -2, -1];
    }

    return [screenPosition, screenScale];
  };

  const [planePosition, planeScale] = adjustPlaneScreenSize();

  return (
    <main className="bg-slate-300/20">
      <Navbar />
      <section className="w-full h-screen relative">
        {/* <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
          POPUP
        </div> */}
        <Canvas
          className={`w-full h-screen bg-transparent ${
            isRotating ? "cursor-grabbing" : "cursor-grab"
          }`}
          camera={{
            near: 0.1,
            far: 1000,
          }}
        >
          <Suspense fallback={<Loader />}>
            <directionalLight position={[1, 1, 1]} intensity={2} />
            <ambientLight intensity={0.5} />
            <hemisphereLight
              skyColor="#b1e1ff"
              groundColor="#000000"
              intensity={1}
            />
            <Sky isRotating={isRotating} />
            <Bird />
            <Plane
              isRotating={isRotating}
              position={planePosition}
              scale={planeScale}
              rotation={[0, Math.PI * 0.5, 0]}
            />
            <Island
              position={isLandPosition}
              scale={islandScale}
              rotation={islandRotation}
              isRotating={isRotating}
              setCurrentStage={setCurrentStage}
              setIsRotating={setIsRotating}
            />
          </Suspense>
        </Canvas>
      </section>
    </main>
  );
}
