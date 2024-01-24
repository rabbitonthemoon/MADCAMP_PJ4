import { useEffect, useRef } from 'react';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';

function Lighting({ lightOn }) {
  const lightRef = useRef();
  const ambientLightRef = useRef();
  const directionalLightRef = useRef();
  const { scene } = useThree();

  useEffect(() => {
    if (!ambientLightRef.current) {
      const ambientLight = new THREE.AmbientLight(0xffcc8f, 0.4);
      // const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);
      ambientLightRef.current = ambientLight;
    }
  }, [scene]);

  useEffect(() => {
    if (!lightRef.current) {
      const light = new THREE.PointLight(0xffffff, 1, 100);
      light.position.set(0, 5, 0);
      scene.add(light);
      lightRef.current = light;
    }

    return () => {
      if (lightRef.current) {
        scene.remove(lightRef.current);
      }
    };
  }, [scene]);

  useEffect(() => {
    if (lightRef.current) {
      lightRef.current.visible = lightOn;
      lightRef.current.intensity = lightOn ? 3 : 0.4;
    }
  }, [lightOn]);

  useEffect(() => {
    if (!directionalLightRef.current) {
      const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
      directionalLight.position.set(0, 1, 0);

      const targetObject = new THREE.Object3D();
      targetObject.position.set(0, 0, 0);
      scene.add(targetObject);

      directionalLight.target = targetObject;
      scene.add(directionalLight);
      directionalLightRef.current = directionalLight;

    }
    directionalLightRef.current.intensity = lightOn ? 1.5 : 0.3;
  }, [scene, lightOn]);

  return null;
}

export default Lighting;
