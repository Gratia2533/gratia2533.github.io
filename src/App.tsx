import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import Background from './components/Background'
import UI from './components/UI'

const Scene = () => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <Background />
      {/* 3D Floating elements could go here, interacting with mouse */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} color="#8F00FF" intensity={1} />
      <pointLight position={[-10, -10, 10]} color="#FF0090" intensity={1} />
    </>
  )
}

function App() {
  return (
    <>
      {/* R3F Canvas Background */}
      <div className="fixed inset-0 z-0">
        <Canvas>
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>

      {/* HTML UI Overlay */}
      <main className="relative z-10">
        <UI />
      </main>
    </>
  )
}

export default App
