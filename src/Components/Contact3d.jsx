import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import gsap from 'gsap';
import futuristicRifle from '../models/futuristic_rifle.glb'

const Contact3d = () => {
    const sceneRef = useRef(null);
    const modelRef = useRef(null);

    useEffect(() => {
        // Scene, Camera, Renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); // Enable transparency
        renderer.setSize(window.innerWidth, window.innerHeight);
        sceneRef.current.appendChild(renderer.domElement);
        renderer.setClearColor(0x000000, 0); // Set clear color to transparent black

        camera.position.z = 5;

        // Lighting
        const ambientLight = new THREE.AmbientLight(0x404040);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
        directionalLight.position.set(1, 1, 1);
        scene.add(directionalLight);

        // Load Model
        const loader = new GLTFLoader();
        loader.load(futuristicRifle, (gltf) => {  // Replace with your model path
            const model = gltf.scene;
            modelRef.current = model; // Store model in ref
            scene.add(model);

            // Optional: Adjust model scale/position
            model.scale.set(0.5, 0.5, 0.5); // Example scale

             // GSAP Animation (after model is loaded)
             gsap.to(model.rotation, {
                duration: 5,
                y: Math.PI * 2, // Rotate 360 degrees
                repeat: -1, // Infinite repeat
                ease: "none" // Linear rotation
            });

        }, undefined, (error) => {
            console.error("Error loading model:", error);
        });

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };

        animate();

        // Handle window resize
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            sceneRef.current.removeChild(renderer.domElement); // Clean up on unmount
        };
    }, []);

    return (
        <div className="bg-black text-white h-screen w-screen relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full" ref={sceneRef} />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h1 className="text-5xl md:text-7xl font-bold mb-4">zaid rehman</h1>
                <h2 className="text-2xl md:text-3xl">Digital Designer & Web Developer</h2>
            </div>
           
          
        </div>
    );
};

export default Contact3d;