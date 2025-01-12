import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';




export function Icon3D({ name, position, color, scale = 1 }) {
  const meshRef = useRef(null); // Remove the type annotation

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(clock.getElapsedTime() + position[0]) * 0.3;
      meshRef.current.rotation.y = Math.sin(clock.getElapsedTime() + position[1]) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <Text
        color={color}
        fontSize={scale}
        maxWidth={200}
        lineHeight={1}
        letterSpacing={0.02}
        textAlign="center"
        font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
        anchorX="center"
        anchorY="middle"
      >
        {name.toUpperCase()}
      </Text>
    </mesh>
  );
}