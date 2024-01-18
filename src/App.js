import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, Stars   } from '@react-three/drei';
import './App.css';

function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/voyager.glb')
  return (
    // <group {...props} dispose={null} scale={1}>
    //   <mesh geometry={nodes.tex_01.geometry} material={materials.tex_01} position={[-0.003, 1.282, 0]} scale={0.485} />
    //   <mesh geometry={nodes.tex_02_AO.geometry} material={materials.Material} position={[-0.003, 1.282, 0]} scale={0.485} />
    //   <mesh geometry={nodes.tex_02_AO_dark.geometry} material={materials['Material.001']} position={[-0.003, 1.282, 0]} scale={0.485} />
    // </group>
    <group {...props} dispose={null} scale={1} ref={group}>
      <mesh geometry={nodes.tex_01.geometry} position={[0, 0, 0]} scale={0.485} material-color={'#B9BABC'} material={materials.voyager}>
      </mesh>
      <mesh geometry={nodes.tex_02_AO.geometry} position={[0, 0, 0]} scale={0.485} material-color={'#FFFFFF'} material={materials.voyager}>
      </mesh>
      <mesh geometry={nodes.tex_02_AO_dark.geometry} position={[0, 0, 0]} scale={0.485} material-color={'#AC8852'} material={materials.voyager}>
      </mesh>
    </group>

  )
}

function App() {
  return (
<div className="wrapper"
  style={{ 
    width: '100%', 
    height: '100vh', 
    background: 'linear-gradient(to right top, #021e41, #1a152f, #1c0d1e, #14060f, #000000)' // Set the background color to black for a space-like appearance
  }}
>
      <Canvas camera={{ fov: 70, position: [20, -5, 15] }} 
       
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight intensity={1} position={[0, 10, 10]} />
          <Model />
          <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
          <Stars /> {/* HDRI Lighting */}
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
