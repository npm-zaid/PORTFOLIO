import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const Demo = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    let scene, camera, renderer, controls,iconObjects; // Declare variables outside

    const init = () => {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      renderer = new THREE.WebGLRenderer({ antialias: true });

      renderer.setSize(window.innerWidth, window.innerHeight);
      mountRef.current.appendChild(renderer.domElement);

      const icons = [
        '../Assets/html_1051277.png',
        '../Assets/css-3_732190.png',
        '../Assets/logo192.png',
        '../Assets/pngwing.com (1).png',
        '../Assets/pngwing.com (3).png',
        '../Assets/pngwing.com.png',
        // Add more icon paths
      ];

       iconObjects = icons.map((icon, index) => {
        const geometry = new THREE.PlaneGeometry(1, 1);
        const texture = new THREE.TextureLoader().load(icon);
        const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true, side: THREE.DoubleSide }); // Important for plane visibility
        const mesh = new THREE.Mesh(geometry, material);

        const angle = (index / icons.length) * Math.PI * 2;
        mesh.position.set(Math.cos(angle) * 5, Math.sin(angle) * 5, 0);
        scene.add(mesh);
        return mesh;
      });

      controls = new OrbitControls(camera, renderer.domElement);
      camera.position.z = 10;

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
      iconObjects.forEach(icon => {
        icon.rotation.z += 0.01;
      });
      controls.update(); // Correct usage of controls.update
      render(); // Call render function here
    };

    const render = () => {
      if (renderer && scene && camera) {
        renderer.render(scene, camera);
      }
    };

    init();
    animate();

    return () => {
      window.removeEventListener('resize', onWindowResize);
      if (mountRef.current && renderer && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100%', height: '100vh' }} />;
};

export default Demo;