"use client";
import "react-toastify/dist/ReactToastify.css";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import Loader from "@/components/Loader";
import Sky from "@/models/Sky";
import Plane from "@/models/Plane";
import Bird from "@/models/Bird";
import FantasyIsland from "@/models/Fantasy";
import Balloon from "@/models/Balloon";
import HoldInfo from "@/components/HoldInfo";
import Navbar from "@/components/Navbar";
import Balloon2 from "@/models/Balloon2";
import Balloon3 from "@/models/Balloon3";
import Rocket from "@/models/Rocket";

export default function Home() {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  const adjustIslandScreenSize = () => {
    let screenScale = [1, 1, 1];
    let screenPosition = [0, -18.5, -90];
    let rotation = [0.1, 4.7, 0];

    if (typeof window !== "undefined" && window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    }

    return [screenPosition, screenScale, rotation];
  };

  const [isLandPosition, islandScale, islandRotation] =
    adjustIslandScreenSize();

  const adjustPlaneScreenSize = () => {
    let screenScale = [1, 1, 1];
    let screenPosition = [0, 0, 1.6];

    if (typeof window !== "undefined" && window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    }

    return [screenPosition, screenScale];
  };

  const [planePosition, planeScale] = adjustPlaneScreenSize();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the timeout duration as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <main className="bg-slate-300/20 h-[100vh]">
        {!isLoading && <Navbar />}

        <section className="w-full h-screen relative">
          <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
            {currentStage && <HoldInfo currentStage={currentStage} />}
          </div>
          <Canvas
            className={`w-full h-screen bg-transparent ${
              isRotating ? "cursor-grabbing" : "cursor-grab"
            }`}
            camera={{
              near: 0.1,
              far: 1000,
            }}
          >
            <Suspense fallback={<Loader isLoading={isLoading} />}>
              <directionalLight position={[1, 1, 1]} intensity={2} />
              <ambientLight intensity={0.5} />
              <hemisphereLight
                skyColor="#b1e1ff"
                groundColor="#000000"
                intensity={1}
              />
              <Sky isRotating={isRotating} />
              <Bird />
              <Balloon
                islandRotation={islandRotation}
                setIsRotating={setIsRotating}
              />
              <Balloon2 />
              <Balloon3 />
              <Rocket />
              <FantasyIsland
                position={isLandPosition}
                scale={islandScale}
                rotation={islandRotation}
                isRotating={isRotating}
                setCurrentStage={setCurrentStage}
                setIsRotating={setIsRotating}
              />
              <Plane
                isRotating={isRotating}
                position={planePosition}
                scale={planeScale}
                rotation={[0, Math.PI * 0.5, 0]}
              />
            </Suspense>
          </Canvas>
        </section>
      </main>
    </>
  );
}
