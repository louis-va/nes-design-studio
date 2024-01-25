import { Suspense, useRef } from 'react'
import { ContactShadows, Environment, CameraControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useNESModelStore } from "@/utils/store";

import NES from './Model';

const ModelView = () => {
  // Set reactive camera movements
  const cameraPosition = useNESModelStore((state) => state.cameraPosition)
  const cameraZoom = useNESModelStore((state) => state.cameraZoom)
  const cameraControlsRef = useRef<CameraControls | null>(null);
  cameraControlsRef.current?.setPosition(cameraPosition.x, cameraPosition.y, cameraPosition.z, true)
  cameraControlsRef.current?.dollyTo(cameraZoom, true)

  return (
    <section className="h-full w-full bg-gradient-to-b from-[#F6F6F6] to-[#E9E9E9]">
      <Canvas shadows camera={{ position: [3, 2, 4.75], fov: 25 }} className='cursor-grab active:cursor-grabbing'>
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
          smoothTime={.35}
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