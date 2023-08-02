import { Canvas, useFrame } from "@react-three/fiber";
import { useFBX, Environment, OrbitControls  } from "@react-three/drei";
import { Suspense, useRef } from "react";

function Model() {
    const previewUrl = localStorage.getItem('character-fbx-url');
    const fbx = useFBX(previewUrl)
    const model = fbx.clone() // clone the FBX object
    const modelRef = useRef()

    useFrame(() => {
        if (modelRef.current) {
            modelRef.current.rotation.y += 0.0025;
        }
    });

    const randomY = Math.floor(Math.random() * (360 - 0 + 1) + 0);

    return (
      <mesh ref={modelRef} position={[0, 0, -50]} rotation={[-20,randomY,40]}>
        <primitive object={model} />
      </mesh>
    )
}

export default function CharacterPreview() {
    return (
        <Canvas camera={{ position: [0, 0, 0] }} gl={{ alpha: true, antialias: false, logarithmicDepthBuffer: true }}>
            <OrbitControls autoRotate minPolarAngle={Math.PI / 1.8} maxPolarAngle={Math.PI / 1.8} />
            <pointLight position={[10, 10, 5]} />
            <pointLight position={[-10, -10, -5]} />
            <ambientLight intensity={0.4} />
            <Suspense fallback={null}>
                <Model />
                <Environment background resolution={64}>
                    <Striplight position={[10, 2, 0]} scale={[1, 3, 10]} />
                    <Striplight position={[-10, 2, 0]} scale={[1, 3, 10]} />
                </Environment>
            </Suspense>
        </Canvas>   
    );
}

function Striplight(props) {
    return (
        <mesh {...props}>
            <boxGeometry />
            <meshBasicMaterial color="white" />
        </mesh>
    )
}
