import React, { useRef, useEffect, useState } from 'react';
// import Donut from '../assets/models/Donut8.glb';
import Donut from '../assets/models/Spider68.glb';

import { Canvas, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import * as THREE from 'three';

export default function ThreeScene() {
  const group = useRef();
  const mixer = useRef(null);
  const clock = useRef(new THREE.Clock());
  const animateOnce = useRef(true);
  const [donut, setDonut] = useState(null);
  const animationAction = useRef(null);

  useEffect(() => {
    const gltfLoader = new GLTFLoader();
    gltfLoader.load(Donut, (gltf) => {
      gltf.scene.scale.set(5, 5, 5);
      gltf.scene.rotateY(3.14);
      gltf.scene.rotateX(-0.45);
      gltf.scene.position.y = -2;

      mixer.current = new THREE.AnimationMixer(gltf.scene);
      animationAction.current = mixer.current.clipAction(gltf.animations[0]);
      // animationAction.current.play();

      setDonut(gltf.scene);
      const root = gltf.scene;
      group.current.add(root);
    });
  }, []);

  useEffect(() => {
    const handleScroll = (event) => {
      if (window.scrollY > 0 && animateOnce.current) {
        animateOnce.current = false;
        animationAction.current.play();

        setTimeout(() => {
          animationAction.current.paused = true;
          // mixer.current.stopAllAction();
        }, 1800);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='ThreeScene'>
      <Canvas style={{ backgroundColor: 'rgba(21,21,21,1)' }}>
        {/* <ambientLight intensity={0.12} /> */}
        <spotLight position={[10, 20, 18]} angle={0.15} penumbra={1} />
        {/* <spotLight position={[-200, -200, -200]} angle={0.15} penumbra={0.1} intensity={0.2} /> */}
        <pointLight position={[-50, -10, -100]} />
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
