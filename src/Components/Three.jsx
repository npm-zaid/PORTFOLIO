import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

import file from '../models/futuristic_rifle.glb'

const Three = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    let scene, camera, renderer, controls;

    const init = async () => {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.set(0, 2, 5); // Adjusted camera position

      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      mountRef.current.appendChild(renderer.domElement);

      // Add lights (more important than you might think!)
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.3); // Soft ambient light
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.7); // Main directional light
      directionalLight.position.set(1, 2, 3); // Position the light
      scene.add(directionalLight);

      const loader = new GLTFLoader();
      loader.load(file, (gltf) => {
        const model = gltf.scene;

        // Important adjustments:
        model.scale.set(.5, .5, .5); // Adjust scale as needed (often models are too large or small)
      

        scene.add(model);

        // Optional: Center the model in the scene. Useful if it's off-center in the file.
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        model.position.sub(center);

        render(); // Render once the model is loaded
      }, (xhr) => {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
      }, (error) => {
        console.log('An error happened',error);
      });

      //Remove sphere
      // const geometry = new THREE.BoxGeometry(3, 3, 3);
      // const material = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.2, metalness: 0.8 });
      // const sphere = new THREE.Mesh(geometry, material);
      // scene.add(sphere);

      controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;

      window.addEventListener('resize', onWindowResize, false);
    };

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      render();
    };

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      render();
    };

    const render = () => {
      if (renderer && scene && camera) {
        renderer.render(scene, camera);
      }
    };

    init().then(() => animate());

    return () => {
      window.removeEventListener('resize', onWindowResize);
      if (mountRef.current && renderer && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      } 
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100vw', height: '100vh' }} />;
};

export default Three;