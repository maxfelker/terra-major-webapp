import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, useFBX, SpotLight } from "@react-three/drei";
import { Suspense } from "react";


export default function CharacterPreview() {
    const fbx = useFBX('HumanBot_Skinned_A.fbx')

    return (
        <Canvas camera={{ position: [0, 0, 0] }} gl={{ alpha: true, antialias: false, logarithmicDepthBuffer: true }}>
        <Suspense fallback={null}>
            <primitive object={fbx} position={[0, -50, -100]} />
            <OrbitControls
              minDistance={10}
              maxDistance={50}
              enableZoom={false}
              enablePan={false}
              minPolarAngle={Math.PI / 2}
              maxPolarAngle={Math.PI / 2}
            />
            <SpotLight position={[0, 0, 0]} angle={0.5} intensity={1.5} castShadow />
            <Environment preset="sunset" background />
        </Suspense>
        </Canvas>   
    );
}
