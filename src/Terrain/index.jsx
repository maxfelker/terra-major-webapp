import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei';
import terrainData from './hm.json';
import * as THREE from 'three'; // Add this

function Terrain() {
  const mesh = useRef();
  let heightmap = terrainData;  // Load the heightmap from the JSON here
  
  useEffect(() => {
    if (mesh.current) {
      for (let i = 0; i < heightmap.length; i++) {
        for (let j = 0; j < heightmap[0].length; j++) {
          mesh.current.geometry.vertices[i * heightmap[0].length + j].z = heightmap[i][j];
        }
      }
      console.log(mesh.current.geometry);
      mesh.current.geometry.verticesNeedUpdate = true;
      mesh.current.geometry.computeVertexNormals();
    }
  }, [mesh, heightmap]);

  return (
    <mesh ref={mesh}>
      <planeGeometry attach="geometry" args={[heightmap[0].length, heightmap.length, heightmap[0].length - 1, heightmap.length - 1]} />
      <meshStandardMaterial attach="material" />
    </mesh>
  );
}

// This is the pointLight component.
const CustomPointLight = ({ position, intensity }) => {
    return <pointLight position={position} intensity={intensity} />;
};

CustomPointLight.propTypes = {
    position: PropTypes.arrayOf(PropTypes.number).isRequired,
    intensity: PropTypes.number.isRequired,
};

function Camera({ position, lookAt }) {
  const ref = useRef();
  
  useFrame(() => {
    if (ref.current) {
      ref.current.lookAt(lookAt);
    }
  });

  return (
    <PerspectiveCamera ref={ref} position={position} makeDefault />
  );
}

Camera.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
  lookAt: PropTypes.instanceOf(THREE.Vector3).isRequired,
};


export default function TerrainPreview() {
  return (
    <Canvas>
      <Camera position={[0, 0, 0]} lookAt={new THREE.Vector3(0, 0, 0)} />
      <OrbitControls />
      <CustomPointLight position={[10, 10, 5]} intensity={0.5} />
      <CustomPointLight position={[-10, -10, -5]} intensity={0.5} />
      <ambientLight intensity={0.4} />
      <Terrain />
      <Environment preset="sunset" background />
    </Canvas>
  );
}