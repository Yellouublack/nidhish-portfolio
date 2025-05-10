import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import { useState } from "react";

export default function PortfolioWorkshop() {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    "Flight Stick System",
    "3-Pin Socket Design",
    "SLM Thesis Work",
    "FEM Simulation Demo"
  ];

  const changeProjectOnScroll = () => {
    const index = Math.min(
      projects.length - 1,
      Math.floor(window.scrollY / 500)
    );
    setCurrentProject(index);
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeProjectOnScroll);
  }

  return (
    <div className="w-full h-[400vh] bg-[#0e0e0e] text-white">
      <div className="sticky top-0 h-screen w-full">
        <Canvas camera={{ position: [0, 2, 8], fov: 50 }}>
          <ambientLight intensity={1} />
          <directionalLight position={[5, 5, 5]} />

          {/* Desk */}
          <mesh position={[0, -1.2, 0]}>
            <boxGeometry args={[6, 0.5, 3]} />
            <meshStandardMaterial color="#654321" />
          </mesh>

          {/* PC Monitor */}
          <mesh position={[0, 0.5, -1.2]}>
            <boxGeometry args={[1.8, 1.2, 0.1]} />
            <meshStandardMaterial color="#222" />
          </mesh>

          {/* 3D Printer */}
          <mesh position={[-2, 0.2, -0.5]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="#333" />
          </mesh>

          {/* Shelf */}
          <mesh position={[2.5, 1.8, -1]}>
            <boxGeometry args={[1.5, 0.2, 0.5]} />
            <meshStandardMaterial color="#888" />
          </mesh>

          <Html position={[0, 0.8, -1.15]} center>
            <div className="bg-black/80 p-2 rounded-lg text-sm w-[250px]">
              <p className="text-green-400 font-bold">Current Project:</p>
              <p>{projects[currentProject]}</p>
            </div>
          </Html>

          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
    </div>
  );
}