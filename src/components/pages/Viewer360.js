import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, useTexture } from "@react-three/drei";

const images = [
  "/kennethswebsite/photosphere-images/OutsideBroch.png",
  "/kennethswebsite/photosphere-images/BrochEntrance.png",
  "/kennethswebsite/photosphere-images/BrochGroundFloor.png",
  "/kennethswebsite/photosphere-images/BrochFloor1.png",
  "/kennethswebsite/photosphere-images/BrochFloor2.png",
  "/kennethswebsite/photosphere-images/BrochVillage.png",
  "/kennethswebsite/photosphere-images/BrochFarm.png",
  "/kennethswebsite/photosphere-images/InsideRoundhouse.png",
  "/kennethswebsite/photosphere-images/InsideRoundhouseB.png",
  "/kennethswebsite/photosphere-images/VillageFarm.png",
  "/kennethswebsite/photosphere-images/LandscapeByVillage.png"
];

function Panorama({ image }) {
  const texture = useTexture(image);
  return (
    <Sphere args={[500, 64, 64]} scale={[-1, 1, 1]}>
      <meshBasicMaterial map={texture} side={2} />
    </Sphere>
  );
}

export default function Viewer360({ onBack }) {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
  
    return (
      <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
        <Canvas>
          <Suspense fallback={null}>
            <Panorama image={images[currentIndex]} />
          </Suspense>
          <OrbitControls enableZoom={false} />
        </Canvas>
        <button onClick={handlePrev} style={{ position: "absolute", left: 20, top: "50%", fontSize: 24 }}>
          ◀
        </button>
        <button onClick={handleNext} style={{ position: "absolute", right: 20, top: "50%", fontSize: 24 }}>
          ▶
        </button>
        <button onClick={onBack} style={{ position: "absolute", top: 20, left: 20, fontSize: 18 }}>
          Home
        </button>
      </div>
    );
  }
