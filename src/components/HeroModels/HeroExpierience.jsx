import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Room } from './Room';
import HeroLights from './HeroLights';

const HeroExpierience = ({ isTablet }) => {
  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet} // Deshabilita zoom en tablets
        autoRotate
        autoRotateSpeed={0.5}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
        minAzimuthAngle={-Math.PI / 4} // límite horizontal izquierda
        maxAzimuthAngle={Math.PI / 4}  // límite horizontal derecha
        makeDefault // asegura que solo exista un control activo
      />

      {/* Luces personalizadas */}
      <HeroLights />

      {/* Grupo que contiene el modelo */}
      <group
        scale={isTablet ? 0.7 : 1}
        position={[0, -3.5, 0]}
        rotation={[0, -Math.PI / 4, 0]}
      >
        <Room />
      </group>
    </Canvas>
  );
};

export default HeroExpierience;
