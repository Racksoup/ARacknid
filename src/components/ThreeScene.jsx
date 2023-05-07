import React, { useRef } from 'react';
import Donut from '../assets/models/Donut8.glb';

import { Canvas } from '@react-three/fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export default function ThreeScene() {
  const group = useRef();

  const gltfLoader = new GLTFLoader();
  gltfLoader.load(Donut, (gltf) => {
    gltf.scene.scale.set(30, 30, 30);
    gltf.scene.position.y = -2;
    const root = gltf.scene;
    group.current.add(root);
  });

  return (
    <div className='ThreeScene'>
      <Canvas style={{ backgroundColor: 'rgba(21,21,21,1)' }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <group ref={group} />
      </Canvas>
    </div>
  );
}
