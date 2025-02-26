// SCENE THREE JS (LA LUNE)
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

// Ce composant est un composant de fond d'écran animé avec une scène 3D
// Il utilise la librairie three.js pour générer la scène
export default function ThreeScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;

    // Genere la scène
    const scene = new THREE.Scene();

    // Genere la caméra
    const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    camera.position.z = 5;

    // Genere le rendu WebGL
    const renderer = new THREE.WebGLRenderer({ alpha: true }); // Enable alpha for transparency
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setClearColor(0x000000, 0); // Set clear color with zero alpha
    currentMount.appendChild(renderer.domElement);

    // Genere la lune et l'ajoute à la scène
    // La geometry , la texture et le material sont des éléments de base de three.js
    // TextureLoader permet de charger une texture depuis une URL
    const geometry = new THREE.SphereGeometry(0.5, 32, 32); 
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/moon_1024.jpg');
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const moon = new THREE.Mesh(geometry, material);
    moon.position.x = -6;
    moon.position.y = 3;
    scene.add(moon);

    // Genere l'animation de la lune
    const animate = function () {
      requestAnimationFrame(animate);

      moon.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    // Gère le redimensionnement de la fenêtre
    const handleResize = () => {
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Nettoie la scène et les écouteurs d'événements
    return () => {
      currentMount.removeChild(renderer.domElement);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100%', height: '100%' }} />;
}