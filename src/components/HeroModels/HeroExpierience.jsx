import { Canvas } from '@react-three/fiber'
import React from 'react'

const HeroExpierience = () => {
  return (
    <Canvas 
        camera={{ position: [0, 0, 15], fov: 45 }}>
            <ambientLight intensity={0.2}  color="#1a1a40"/>
        HeroExpierience
    </Canvas>
  )
}

export default HeroExpierience