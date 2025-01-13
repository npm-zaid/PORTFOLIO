import React, { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import robo from '../models/nexbot_robot_character_concept (1).gltf'

function Model(props) {
    const { scene } = useGLTF(robo); // Path to your GLB/GLTF file
    return <primitive object={scene} {...props} />;
}

function Robot() {
    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <Canvas>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <Suspense fallback={null}> {/* Show nothing while loading */}
                    <Model scale={[0.1, 0.1, 0.1]} position={[0, -1, 0]} /> {/* Adjust scale and position */}
                </Suspense>
                <OrbitControls /> {/* Optional: Add orbit controls for interaction */}
            </Canvas>
        </div>
    );
}

export default Robot;