import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Room } from './Room';
import HeroLights from './HeroLights';
import { Suspense, useState, useEffect, useRef } from 'react';

const HeroExpierience = ({ isTablet }) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { rootMargin: '100px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full">
      <Canvas 
        frameloop={isVisible ? "always" : "demand"}
        camera={{ position: [0, 0, 15], fov: 45 }}
        dpr={[1, 1.5]}
      >
        <OrbitControls
          enablePan={false}
          enableZoom={false} // Deshabilita zoom en tablets
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
          <Suspense fallback={null}>
            <Room />
          </Suspense>
        </group>
      </Canvas>
    </div>
  );
};

export default HeroExpierience;
