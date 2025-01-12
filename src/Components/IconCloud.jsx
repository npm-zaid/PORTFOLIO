import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Icon3D } from './Icon3D';

const icons = [
  { name: 'react', position: [2, 2, 1], color: '#61DAFB' },
  { name: 'javascript', position: [2, -2, 2], color: '#F7DF1E' },
  { name: 'typescript', position: [-2, -1, -1], color: '#3178C6' },
  { name: 'html5', position: [-1, 1, -1], color: '#E34F26' },
  { name: 'css3', position: [0, 2, 0], color: '#1572B6' },
  { name: 'nodejs', position: [-4, 0, 0], color: '#339933' },
  { name: 'mongoDm', position: [3, 0, 0], color: '#339933' },
  { name: 'git', position: [0, 0, 0], color: '#F05032' },
  { name: 'vscode', position: [0, -2, 0], color: '#007ACC' },
  { name: 'npm', position: [3, -2, -2], color: '#CB3837' },
  { name: 'express', position: [-3, 2, 2], color: '#2C8EBB' },

];

function IconGroup() {
  const groupRef = useRef(null); // Remove the type annotation

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.1;
      groupRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.5) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {icons.map((icon) => (
        <Icon3D
          key={icon.name}
          name={icon.name}
          position={icon.position}
          color={icon.color}
          scale={0.5}
        />
      ))}
    </group>
  );
}

export function IconCloud() {
  return (
    <div className="w-full h-[110vh]">
      <h1 className='text-gray-400 text-center sm:text-[2vw] text-[4vw]  w-fit mx-auto  py-2 relative'>my TechStack
      <span className='absolute -bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-zinc-500 to-transparent '></span>
      </h1>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        style={{ background:'#18181B'}}
      >
        <ambientLight intensity={0.5}/>
        <pointLight position={[10, 10, 10]} intensity={1}/>
        <IconGroup/>
      </Canvas>
    </div>
  );
}

{
  /* 
  const icons = [
  { name: 'react', position: [1, 1, 1], color: '#61DAFB' },
  { name: 'javascript', position: [-1, -1, 1], color: '#F7DF1E' },
  { name: 'typescript', position: [1, -1, -1], color: '#3178C6' },
  { name: 'html5', position: [-1, 1, -1], color: '#E34F26' },
  { name: 'css3', position: [0, 2, 0], color: '#1572B6' },
  { name: 'nodejs', position: [2, 0, 0], color: '#339933' },
  { name: 'git', position: [0, 0, 2], color: '#F05032' },
  { name: 'github', position: [-2, 0, 0], color: '#181717' },
  { name: 'vscode', position: [0, -2, 0], color: '#007ACC' },
  { name: 'npm', position: [0, 0, -2], color: '#CB3837' },
  { name: 'yarn', position: [-3, 2, 2], color: '#2C8EBB' },

]; */
}