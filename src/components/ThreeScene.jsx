import React, { useRef, useEffect, useState } from 'react';
import Donut from '../assets/models/Donut8.glb';

import { Canvas, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import * as THREE from 'three';

export default function ThreeScene() {
  const group = useRef();
  const mixer = useRef(null);
  const clock = useRef(new THREE.Clock());
  const [donut, setDonut] = useState(null);

  useEffect(() => {
    const gltfLoader = new GLTFLoader();
    gltfLoader.load(Donut, (gltf) => {
      gltf.scene.scale.set(26, 26, 26);
      gltf.scene.position.y = -2.25;

      mixer.current = new THREE.AnimationMixer(gltf.scene);
      const animationAction = mixer.current.clipAction(gltf.animations[0]);
      animationAction.play();

      const root = gltf.scene;
      group.current.add(root);
      setDonut(gltf.scene);
    });
  }, []);

  return (
    <div className='ThreeScene'>
      <Canvas style={{ backgroundColor: 'rgba(21,21,21,1)' }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <group ref={group}>
          <mesh />
          {donut && <AnimatedDonut donut={donut} mixer={mixer} clock={clock} />}
        </group>
      </Canvas>
    </div>
  );
}

function AnimatedDonut(props) {
  const { clock, donut, mixer } = props;
  const ref = useRef();

  useFrame(() => {
    if (mixer.current) {
      const delta = clock.current.getDelta();
      mixer.current.update(delta);
    }
  });

  return <primitive ref={ref} object={donut} />;
}
