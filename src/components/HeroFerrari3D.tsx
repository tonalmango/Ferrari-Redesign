import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useEffect, useLayoutEffect, useMemo, useRef } from "react";
import { Environment, useFBX } from "@react-three/drei";
import * as THREE from "three";

/** 1995 Ferrari F50 from extracted `1995-ferrari-f50.zip` — FBX + textures in this folder */
export const HERO_F50_MODEL = "/models/f50/source/final/FINAL_MODEL.fbx";

type CarModelProps = {
  scrollRotation: number;
  slideIndex: number;
  slideCount: number;
};

function CarModel({ scrollRotation, slideIndex, slideCount }: CarModelProps) {
  const groupRef = useRef<THREE.Group>(null);
  const fitRef = useRef<THREE.Group>(null);
  const slideTarget = useRef(0);
  const slideCurrent = useRef(0);
  const fbx = useFBX(HERO_F50_MODEL);
  const model = useMemo(() => fbx.clone(true), [fbx]);

  useLayoutEffect(() => {
    const fit = fitRef.current;
    if (!fit) return;
    fit.position.set(0, 0, 0);
    fit.scale.setScalar(1);
    model.updateMatrixWorld(true);
    const box = new THREE.Box3().setFromObject(model);
    if (box.isEmpty()) return;
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    fit.position.set(-center.x, -center.y, -center.z);
    const maxDim = Math.max(size.x, size.y, size.z);
    const targetSize = 4.8;
    if (maxDim > 0) fit.scale.setScalar(targetSize / maxDim);
  }, [model]);

  useEffect(() => {
    const t = (slideIndex / Math.max(1, slideCount)) * Math.PI * 2;
    slideTarget.current = t;
  }, [slideIndex, slideCount]);

  useFrame((_, delta) => {
    const g = groupRef.current;
    if (!g) return;
    slideCurrent.current = THREE.MathUtils.lerp(
      slideCurrent.current,
      slideTarget.current,
      1 - Math.exp(-7 * delta)
    );
    g.rotation.y = scrollRotation + slideCurrent.current;
  });

  return (
    <group ref={groupRef}>
      <group ref={fitRef} position={[0, -0.35, 0]}>
        <primitive object={model} />
      </group>
    </group>
  );
}

useFBX.preload(HERO_F50_MODEL);

type HeroFerrari3DProps = {
  scrollRotation: number;
  slideIndex: number;
  slideCount: number;
};

const HeroFerrari3D = ({
  scrollRotation,
  slideIndex,
  slideCount,
}: HeroFerrari3DProps) => {
  return (
    <div className="pointer-events-none absolute inset-0 z-[4] h-full w-full">
      <Canvas
        className="h-full w-full"
        camera={{ position: [0, 0.5, 5], fov: 45 }}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
        }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.45} />
        <directionalLight position={[8, 10, 6]} intensity={1.15} />
        <directionalLight position={[-6, 4, -8]} intensity={0.4} />
        <directionalLight position={[0, 6, -4]} intensity={0.25} />
        <Suspense fallback={null}>
          <CarModel
            scrollRotation={scrollRotation}
            slideIndex={slideIndex}
            slideCount={slideCount}
          />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HeroFerrari3D;
