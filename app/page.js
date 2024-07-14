"use client";

import Navbar from "@/components/Navbar";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "@/components/Loader";
import Island from "@/models/Island";
import Sky from "@/models/Sky";

export default function Home() {
  const adjustIslandScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -11.5, -37];
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
  return (
    <main className="bg-slate-300/20">
      <Navbar />
      <section className="w-full h-screen relative">
        {/* <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
          POPUP
        </div> */}
        <Canvas
          className="w-full h-screen bg-transparent"
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
            <Sky />
            <Island
              position={isLandPosition}
              scale={islandScale}
              rotation={islandRotation}
            />
          </Suspense>
        </Canvas>
      </section>
    </main>
  );
}
