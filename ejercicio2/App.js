import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";

function PBRBox({ position, size = [1, 1, 1], textures }) {
  const [colorMap, normalMap, roughnessMap] = useTexture([
    textures.color,
    textures.normal,
    textures.roughness
  ]);
  return (
    <mesh position={position} castShadow receiveShadow>
      <boxGeometry args={size} />
      <meshStandardMaterial
        map={colorMap}
        normalMap={normalMap}
        roughnessMap={roughnessMap}
        metalness={0.1}
        roughness={0.7}
      />
    </mesh>
  );
}

function Pyramid() {
  const textures = {
    color: "Rock055_1K-JPG/Rock055_1K-JPG_Color.jpg",
    normal: "Rock055_1K-JPG/Rock055_1K-JPG_NormalGL.jpg",
    roughness: "Rock055_1K-JPG/Rock055_1K-JPG_Roughness.jpg"
  };

  const levels = 4;
  const boxes = [];
  for (let y = 0; y < levels; y++) {
    const size = levels - y;
    for (let x = 0; x < size; x++) {
      for (let z = 0; z < size; z++) {
        boxes.push(
          <PBRBox
            key={`${x}-${y}-${z}`}
            position={[
              x - (size - 1) / 2,
              y + 0.5,
              z - (size - 1) / 2
            ]}
            textures={textures}
          />
        );
      }
    }
  }
  return <>{boxes}</>;
}

export default function App() {
  return (
    <Canvas
      shadows
      camera={{ position: [5, 5, 8], fov: 50 }}
      style={{ height: "100vh", background: "#222" }}
    >
      {/* LUZ AMBIENTE */}
      <ambientLight intensity={0.4} />
      {/* LUZ PRINCIPAL */}
      <directionalLight
        position={[5, 10, 5]}
        intensity={1.2}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      {/* SUELO */}
      <mesh
        receiveShadow
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0, 0]}
      >
        <planeGeometry args={[15, 15]} />
        <meshStandardMaterial color="#dadada" roughness={0.8} />
      </mesh>
      {/* PIRÁMIDE */}
      <Pyramid />
      {/* CONTROLES DE CÁMARA */}
      <OrbitControls />
    </Canvas>
  );
}


