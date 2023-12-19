import React, { useRef, Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, useAnimations, Stage, useScroll } from "@react-three/drei";

export function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/scene.gltf");
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    const animateAction = actions[names[0]];
    animateAction.reset().fadeIn(0.5).play();
    animateAction.timeScale = 0.1;
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.002}
        >
          <group
            name="fc09fa6deb6c45f687e724438fed81adfbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Earth"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={57.393}
                >
                  <mesh
                    name="Earth_Earth_0"
                    geometry={nodes.Earth_Earth_0.geometry}
                    material={materials.Earth}
                  />
                  <mesh
                    name="Earth_Earth_0_1"
                    geometry={nodes.Earth_Earth_0_1.geometry}
                    material={materials.Earth}
                  />
                  <mesh
                    name="Earth_Earth_0_2"
                    geometry={nodes.Earth_Earth_0_2.geometry}
                    material={materials.Earth}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/scene.gltf");

export default function Sphere() {
  return (
    <Canvas camera={{ position: [3, 3], zoom: 1 }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.1} />
        <directionalLight intensity={1.5} position={[1, 0, -0.25]} />
        <Stage>
          <mesh>
            <Model />
          </mesh>
        </Stage>
      </Suspense>
    </Canvas>
  );
}
