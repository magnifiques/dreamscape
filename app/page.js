"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import Loader from "@/components/Loader";
// import Island from "@/models/Island";
import Sky from "@/models/Sky";
import Plane from "@/models/Plane";
import Bird from "@/models/Bird";
import FantasyIsland from "@/models/Fantasy";
import Balloon from "@/models/Balloon";
import HoldInfo from "@/components/HoldInfo";
import Image from "next/image";
import { soundoff, soundon } from "@/assets/icons";

export default function Home() {
  const [isRotating, setIsRotating] = useState(false);
  // const audioRef = useRef(new Audio("../assets/sakura.mp3"));
  // audioRef.current.volume = 0.4;
  // audioRef.current.loop = true;
  const [currentStage, setCurrentStage] = useState(1);
  // const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  // useEffect(() => {
  //   if (isPlayingMusic) {
  //     audioRef.current.play();
  //   }
  //   return () => {
  //     audioRef.current.pause();
  //   };
  // }, [isPlayingMusic]);

  const adjustIslandScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -18.5, -90];
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
      screenPosition = [0, 0, 1.6];
    }

    return [screenPosition, screenScale];
  };

  const [planePosition, planeScale] = adjustPlaneScreenSize();

  return (
    <main className="bg-slate-300/20 h-[100vh]">
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
            <Balloon
              islandRotation={islandRotation}
              setIsRotating={setIsRotating}
            />
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
            {/* <Island
              position={isLandPosition}
              scale={islandScale}
              rotation={islandRotation}
              isRotating={isRotating}
              setCurrentStage={setCurrentStage}
              setIsRotating={setIsRotating}
            /> */}
          </Suspense>
        </Canvas>
        {/* <div className="absolute bottom-2 left-2">
          <Image
            src={!isPlayingMusic ? soundoff : soundon}
            alt="sound"
            className="w-10 h-10 cursor-pointer object-contain"
            onClick={() => setIsPlayingMusic((prev) => (prev = !prev))}
          />
        </div> */}
      </section>
    </main>
  );
}
