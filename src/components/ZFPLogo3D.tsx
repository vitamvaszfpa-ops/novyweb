import { useRef, useEffect, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text3D, Center } from "@react-three/drei";
import * as THREE from "three";

// ZFP Orange - visible on light background
const TEXT_COLOR = "#ed6d05";

// ZFP Text Row - precisely aligned
const ZFPText = ({ scrollProgress }: { scrollProgress: number }) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      // Scroll-based rotation
      const baseRotationY = 0.2 + scrollProgress * Math.PI * 0.3;
      const baseRotationX = 0.15 + Math.sin(scrollProgress * Math.PI) * 0.15;
      
      groupRef.current.rotation.y = baseRotationY + Math.sin(state.clock.elapsedTime * 0.3) * 0.02;
      groupRef.current.rotation.x = baseRotationX + Math.sin(state.clock.elapsedTime * 0.4) * 0.01;
      
      // Subtle floating animation
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.08;
      
      // Move based on scroll
      groupRef.current.position.z = -scrollProgress * 2;
    }
  });

  const textMaterialProps = {
    color: TEXT_COLOR,
    metalness: 0.25,
    roughness: 0.5,
  };

  // Size increased by 20%
  const textConfig = {
    font: "/fonts/helvetiker_bold.typeface.json",
    size: 1.44,
    height: 0.42,
    curveSegments: 16,
    bevelEnabled: true,
    bevelThickness: 0.042,
    bevelSize: 0.03,
    bevelSegments: 8,
  };

  // Uniform letter spacing - adjusted for consistent gaps
  const letterSpacing = 1.75;
  
  return (
    <group ref={groupRef}>
      <Center>
        <group>
          {/* Top row: ZFP - manually adjusted for optical consistency */}
          <group position={[0, 1.0, 0]}>
            <Text3D {...textConfig} position={[-1.9, 0, 0]}>
              Z
              <meshStandardMaterial {...textMaterialProps} />
            </Text3D>
            <Text3D {...textConfig} position={[-0.15, 0, 0]}>
              F
              <meshStandardMaterial {...textMaterialProps} />
            </Text3D>
            <Text3D {...textConfig} position={[1.35, 0, 0]}>
              P
              <meshStandardMaterial {...textMaterialProps} />
            </Text3D>
          </group>
          
          {/* Bottom row: GROUP - aligned under ZFP with consistent spacing */}
          <group position={[0, -1.0, 0]}>
            <Text3D {...textConfig} position={[-1.9, 0, 0]}>
              G
              <meshStandardMaterial {...textMaterialProps} />
            </Text3D>
            <Text3D {...textConfig} position={[-0.15, 0, 0]}>
              R
              <meshStandardMaterial {...textMaterialProps} />
            </Text3D>
            <Text3D {...textConfig} position={[1.35, 0, 0]}>
              O
              <meshStandardMaterial {...textMaterialProps} />
            </Text3D>
            <Text3D {...textConfig} position={[3.0, 0, 0]}>
              U
              <meshStandardMaterial {...textMaterialProps} />
            </Text3D>
            <Text3D {...textConfig} position={[4.55, 0, 0]}>
              P
              <meshStandardMaterial {...textMaterialProps} />
            </Text3D>
          </group>
        </group>
      </Center>
    </group>
  );
};

// Fallback component while font loads
const LoadingFallback = () => null;

// Main 3D Scene
const Scene = ({ scrollProgress }: { scrollProgress: number }) => {
  return (
    <>
      {/* Sophisticated lighting setup */}
      <ambientLight intensity={0.45} />
      
      {/* Key light - main directional light */}
      <directionalLight 
        position={[5, 8, 6]} 
        intensity={1.3} 
        color="#ffffff"
        castShadow
      />
      
      {/* Fill light - softer from opposite side */}
      <directionalLight 
        position={[-4, 3, -3]} 
        intensity={0.45} 
        color="#ffffff"
      />
      
      {/* Rim light - to highlight edges */}
      <directionalLight 
        position={[0, -3, -5]} 
        intensity={0.5} 
        color="#8899ff"
      />
      
      {/* Subtle point light for glow */}
      <pointLight 
        position={[0, 2, 3]} 
        intensity={0.35} 
        color="#ff8855"
        distance={10}
      />
      
      {/* 3D Text */}
      <Suspense fallback={<LoadingFallback />}>
        <ZFPText scrollProgress={scrollProgress} />
      </Suspense>
    </>
  );
};

// Main Component
export const ZFPLogo3D = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollTop / Math.max(docHeight, 1), 1);
      setScrollProgress(progress);
      
      // Fade out before footer - start fading at 60% scroll, fully hidden at 80%
      // Base opacity is 0.25 for subtle background effect on light theme
      const baseOpacity = 0.25;
      if (progress > 0.6) {
        const fadeProgress = (progress - 0.6) / 0.2;
        setOpacity(Math.max(0, baseOpacity * (1 - fadeProgress)));
      } else {
        setOpacity(baseOpacity);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Don't render if fully transparent
  if (opacity <= 0) return null;

  return (
    <div 
      className="fixed inset-0 z-0 pointer-events-none" 
      style={{ opacity }}
    >
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: "transparent" }}
        shadows
      >
        <Scene scrollProgress={scrollProgress} />
      </Canvas>
    </div>
  );
};

export default ZFPLogo3D;
