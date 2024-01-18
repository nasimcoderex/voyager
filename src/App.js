import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, Stars   } from '@react-three/drei';
import './App.css';

function Model(props) {
  const group = useRef()
  useFrame(() => {
    // This will continuously rotate the model
    if (group.current) {
      group.current.rotation.y += 0.01;
    }
  });
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


function Moon(props) {
  const moonRef = useRef()
  useFrame(() => {
    // This will continuously rotate the model
    if (moonRef.current) {
      moonRef.current.rotation.y += 0.008;
    }
  });
  const { nodes, materials } = useGLTF('/our_moon.glb')
  return (
    <group {...props} dispose={null} ref={moonRef}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.lroc_color_poles_16k_lroc_color_poles_16k_0.geometry} material={materials.lroc_color_poles_16k} />
            <mesh geometry={nodes.lroc_color_poles_16k_lroc_color_poles_16k_0_1.geometry} material={materials.lroc_color_poles_16k} />
            <mesh geometry={nodes.lroc_color_poles_16k_lroc_color_poles_16k_0_2.geometry} material={materials.lroc_color_poles_16k} />
            <mesh geometry={nodes.lroc_color_poles_16k_lroc_color_poles_16k_0_3.geometry} material={materials.lroc_color_poles_16k} />
            <mesh geometry={nodes.lroc_color_poles_16k_lroc_color_poles_16k_0_4.geometry} material={materials.lroc_color_poles_16k} />
            <mesh geometry={nodes.lroc_color_poles_16k_lroc_color_poles_16k_0_5.geometry} material={materials.lroc_color_poles_16k} />
            <mesh geometry={nodes.lroc_color_poles_16k_lroc_color_poles_16k_0_6.geometry} material={materials.lroc_color_poles_16k} />
            <mesh geometry={nodes.lroc_color_poles_16k_lroc_color_poles_16k_0_7.geometry} material={materials.lroc_color_poles_16k} />
            <mesh geometry={nodes.lroc_color_poles_16k_lroc_color_poles_16k_0_8.geometry} material={materials.lroc_color_poles_16k} />
            <mesh geometry={nodes.lroc_color_poles_16k_lroc_color_poles_16k_0_9.geometry} material={materials.lroc_color_poles_16k} />
            <mesh geometry={nodes.lroc_color_poles_16k_lroc_color_poles_16k_0_10.geometry} material={materials.lroc_color_poles_16k} />
          </group>
        </group>
      </group>
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
          <Model position={[0,5,0]} />
          <Moon camera={{ fov: 70, position: [0, 0, 15] }} position={[0,-8,0]}/>
          <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} enableDamping={true} />
          <Stars /> {/* HDRI Lighting */}
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
