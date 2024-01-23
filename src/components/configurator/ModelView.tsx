import { Suspense, useRef, useState } from 'react'
import { ContactShadows, Environment, CameraControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

import NES from './Model';

const ModelView = () => {
  const [position, setPosition] = useState({x: 2, y: 2, z: 2})

  const cameraControlsRef = useRef<CameraControls | null>(null);

  if (cameraControlsRef) {
    cameraControlsRef.current?.setPosition(position.x, position.y, position.z, true)
    cameraControlsRef.current?.dollyTo(4, true)
  }

  const HandleClick = () => {
    setPosition({
      x: 3,
      y: 2,
      z: 3
    })
  }

  return (
    <section className="h-full w-full bg-gradient-to-b from-[#ECECEC] to-[#D5D5D5]">
      <Canvas onClick={() => HandleClick()} shadows camera={{ position: [3, 2, 4.75], fov: 25 }} className='cursor-grab active:cursor-grabbing'>
        <ambientLight intensity={1} />
        <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
        <Suspense fallback={null}>
          <NES />
        </Suspense>
        <Environment preset="city" />
        <ContactShadows position={[0, -0.8, 0]} opacity={0.5} scale={10} blur={2} far={0.8} />
        <CameraControls
          ref={cameraControlsRef}
          draggingSmoothTime={.35}
          smoothTime={.5}
          minDistance={2}
          maxDistance={8}
          minPolarAngle={.9}
          maxPolarAngle={2.1}
        />
      </Canvas>
    </section>
  )
}

export default ModelView