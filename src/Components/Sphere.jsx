import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import pic1 from '../Assets/github.png'
import pic2 from '../Assets/mongodb.png'
import pic3 from '../Assets/pngwing.com.png'

const numIcons = 30;
const iconSize = 0.2;

function Icon({ texture }) {
  return (
    <mesh>
      <planeGeometry args={[iconSize, iconSize]} />
      <meshBasicMaterial map={texture} transparent opacity={0.8} side={THREE.DoubleSide} />
    </mesh>
  );
}

function IconCloud() {
  const groupRef = useRef();
  const textures = useRef([]);

  useEffect(() => {
    const textureLoader = new THREE.TextureLoader();
    const iconPaths = [
     pic1,pic2,pic3,
      
    ];

    Promise.all(iconPaths.map(path => textureLoader.loadAsync(path)))
      .then(loadedTextures => {
        textures.current = loadedTextures;
      })
      .catch(error => {
        console.error("Error loading textures:", error);
      });
  }, []);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005; // Adjust rotation speed here
    }
  });

  const distributeIcons = () => {
    const positions = [];
    for (let i = 0; i < numIcons; i++) {
      const phi = Math.acos(-1 + (2 * i) / numIcons);
      const theta = Math.sqrt(numIcons * Math.PI) * phi;
      const x = Math.cos(theta) * Math.sin(phi);
      const y = Math.sin(theta) * Math.sin(phi);
      const z = Math.cos(phi);
      positions.push([x, y, z]);
    }
    return positions;
  };

  const positions = distributeIcons();

  return (
    <group ref={groupRef}>
      {textures.current.length > 0 && positions.map((position, index) => (
        <Icon key={index} texture={textures.current[index % textures.current.length]} position={position} />
      ))}
    </group>
  );
}

export default function Sphere() {
  return (
    <div className="h-screen w-screen flex items-center justify-center"> {/* Tailwind classes */}
      <Canvas camera={{ position: [0, 0, 3] }}>
        {/* Improved Lighting */}
        <ambientLight intensity={0.2} /> {/* Reduced ambient light */}
        <pointLight position={[5, 5, 5]} intensity={0.8} /> {/* Point light */}
        <pointLight position={[-5, -5, 5]} intensity={0.5} /> {/* Another point light */}
        <IconCloud />
        <OrbitControls />
      </Canvas>
    </div>
  );
}