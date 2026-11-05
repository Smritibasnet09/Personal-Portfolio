import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function DeskScene3D({ className = '' }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const width = container.clientWidth || 450;
    const height = container.clientHeight || 450;

    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(2.4, 1.8, 4.2);
    camera.lookAt(0, 0.2, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    // Studio Lighting
    const ambientLight = new THREE.AmbientLight(0x2d174d, 1.3);
    scene.add(ambientLight);

    // Left purple rim
    const purpleLight = new THREE.PointLight(0xc084fc, 2.8, 15);
    purpleLight.position.set(-3, 2, 2);
    scene.add(purpleLight);

    // Right pink rim
    const pinkLight = new THREE.PointLight(0xf472b6, 2.5, 15);
    pinkLight.position.set(3, 1.5, 2);
    scene.add(pinkLight);

    // Monitor screen light
    const monitorLight = new THREE.PointLight(0xa855f7, 2.5, 5);
    monitorLight.position.set(0.1, 0.4, 0.1);
    scene.add(monitorLight);

    // Materials
    const skinMat = new THREE.MeshStandardMaterial({
      color: 0xffede6,
      roughness: 0.42,
      metalness: 0.02,
    });

    const hairMat = new THREE.MeshStandardMaterial({
      color: 0x1c1724,
      roughness: 0.32,
      metalness: 0.12,
    });

    const clothesMat = new THREE.MeshStandardMaterial({
      color: 0x2e1e47,
      roughness: 0.5,
    });

    const deskMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.2,
      metalness: 0.1,
    });

    const metalLegMat = new THREE.MeshStandardMaterial({
      color: 0xcccccc,
      metalness: 0.8,
      roughness: 0.2,
    });

    const monitorMat = new THREE.MeshStandardMaterial({
      color: 0x181824,
      roughness: 0.3,
    });

    const screenMat = new THREE.MeshStandardMaterial({
      color: 0x3b0764,
      emissive: 0x9333ea,
      emissiveIntensity: 0.85,
      roughness: 0.2,
    });

    const deskGroup = new THREE.Group();
    scene.add(deskGroup);
    deskGroup.position.set(0, -0.2, 0);

    // --- Table ---
    const tableTop = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.06, 1.1), deskMat);
    deskGroup.add(tableTop);

    const createLeg = (x, z) => {
      const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 1.4, 16), metalLegMat);
      leg.position.set(x, -0.7, z);
      return leg;
    };
    deskGroup.add(createLeg(-0.95, -0.4));
    deskGroup.add(createLeg(0.95, -0.4));
    deskGroup.add(createLeg(-0.95, 0.4));
    deskGroup.add(createLeg(0.95, 0.4));

    // Base Bars
    const barGeo = new THREE.BoxGeometry(0.04, 0.04, 0.8);
    const leftBar = new THREE.Mesh(barGeo, metalLegMat);
    leftBar.position.set(-0.95, -1.35, 0);
    deskGroup.add(leftBar);
    const rightBar = leftBar.clone();
    rightBar.position.set(0.95, -1.35, 0);
    deskGroup.add(rightBar);

    // --- Computer Monitor ---
    const monitorGroup = new THREE.Group();
    monitorGroup.position.set(0.2, 0.45, -0.15);
    monitorGroup.rotation.y = -0.15;
    deskGroup.add(monitorGroup);

    const monitorBody = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.65, 0.04), monitorMat);
    monitorGroup.add(monitorBody);

    const screenMesh = new THREE.Mesh(new THREE.PlaneGeometry(0.94, 0.58), screenMat);
    screenMesh.position.set(0, 0, 0.022);
    monitorGroup.add(screenMesh);

    const standPole = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.35, 16), metalLegMat);
    standPole.position.set(0, -0.32, 0);
    monitorGroup.add(standPole);

    const standBase = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.02, 24), metalLegMat);
    standBase.position.set(0, -0.48, 0);
    monitorGroup.add(standBase);

    // --- Keyboard & Mouse ---
    const keyboard = new THREE.Mesh(new THREE.BoxGeometry(0.65, 0.02, 0.22), monitorMat);
    keyboard.position.set(0.1, 0.04, 0.22);
    keyboard.rotation.y = -0.05;
    deskGroup.add(keyboard);

    const mouse = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.03, 0.12), monitorMat);
    mouse.position.set(0.55, 0.04, 0.22);
    deskGroup.add(mouse);

    // --- Chair ---
    const chairGroup = new THREE.Group();
    chairGroup.position.set(-0.25, -0.4, 0.7);
    chairGroup.rotation.y = 0.2;
    deskGroup.add(chairGroup);

    const chairSeat = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.08, 0.65), clothesMat);
    chairGroup.add(chairSeat);

    const chairBack = new THREE.Mesh(new THREE.BoxGeometry(0.65, 0.8, 0.08), clothesMat);
    chairBack.position.set(0, 0.45, 0.3);
    chairBack.rotation.x = 0.08;
    chairGroup.add(chairBack);

    // --- Female Developer Character Sitting & Coding ---
    const devGroup = new THREE.Group();
    devGroup.position.set(-0.25, -0.25, 0.65);
    devGroup.rotation.y = 0.25;
    deskGroup.add(devGroup);

    // Torso
    const devTorso = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.38, 0.85, 24), clothesMat);
    devTorso.position.set(0, 0.45, 0);
    devTorso.rotation.x = 0.1;
    devGroup.add(devTorso);

    // Legs
    const devLegLeft = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.65, 16), clothesMat);
    devLegLeft.position.set(-0.14, 0.05, -0.25);
    devLegLeft.rotation.x = Math.PI / 2;
    devGroup.add(devLegLeft);

    const devLegRight = devLegLeft.clone();
    devLegRight.position.x = 0.14;
    devGroup.add(devLegRight);

    // Shins & Shoes
    const devShinLeft = new THREE.Mesh(new THREE.CylinderGeometry(0.085, 0.08, 0.65, 16), clothesMat);
    devShinLeft.position.set(-0.14, -0.35, -0.55);
    devGroup.add(devShinLeft);

    const devShinRight = devShinLeft.clone();
    devShinRight.position.x = 0.14;
    devGroup.add(devShinRight);

    // Head
    const devHeadGroup = new THREE.Group();
    devHeadGroup.position.set(0, 1.05, 0.05);
    devHeadGroup.rotation.x = 0.08;
    devGroup.add(devHeadGroup);

    const devHead = new THREE.Mesh(new THREE.SphereGeometry(0.28, 24, 24), skinMat);
    devHead.scale.set(0.96, 1.1, 0.96);
    devHeadGroup.add(devHead);

    // Long Flowing Hair for Developer
    const devHair = new THREE.Mesh(
      new THREE.SphereGeometry(0.3, 24, 24, 0, Math.PI * 2, 0, Math.PI * 0.55),
      hairMat
    );
    devHair.position.set(0, 0.08, -0.02);
    devHair.scale.set(1.05, 1.1, 1.04);
    devHeadGroup.add(devHair);

    // Hair falling down back
    const devBackHair = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.32, 0.85, 16), hairMat);
    devBackHair.position.set(0, -0.25, -0.22);
    devBackHair.rotation.x = 0.15;
    devHeadGroup.add(devBackHair);

    // Hair strands falling forward over shoulders
    const devLockLeft = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.05, 0.6, 12), hairMat);
    devLockLeft.position.set(-0.22, -0.2, 0.12);
    devLockLeft.rotation.z = -0.15;
    devHeadGroup.add(devLockLeft);

    const devLockRight = devLockLeft.clone();
    devLockRight.position.x = 0.22;
    devLockRight.rotation.z = 0.15;
    devHeadGroup.add(devLockRight);

    // Cheerful purple glowing eyes
    const devEyes = new THREE.Group();
    devEyes.position.set(0, 0.02, 0.26);
    const eyeDotGeo = new THREE.CircleGeometry(0.03, 16);
    const eyeIrisMat = new THREE.MeshBasicMaterial({ color: 0xa855f7 });
    const leftIris = new THREE.Mesh(eyeDotGeo, eyeIrisMat);
    leftIris.position.set(-0.09, 0, 0);
    const rightIris = new THREE.Mesh(eyeDotGeo, eyeIrisMat);
    rightIris.position.set(0.09, 0, 0);
    devEyes.add(leftIris);
    devEyes.add(rightIris);
    devHeadGroup.add(devEyes);

    // Arms & Hands (Animated typing motion)
    const leftUpperArm = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.055, 0.42, 16), clothesMat);
    leftUpperArm.position.set(-0.3, 0.42, -0.1);
    leftUpperArm.rotation.x = -0.6;
    devGroup.add(leftUpperArm);

    const rightUpperArm = leftUpperArm.clone();
    rightUpperArm.position.x = 0.3;
    devGroup.add(rightUpperArm);

    const leftForearm = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.045, 0.45, 16), skinMat);
    leftForearm.position.set(-0.16, 0.28, -0.38);
    leftForearm.rotation.x = 1.35;
    leftForearm.rotation.z = -0.3;
    devGroup.add(leftForearm);

    const rightForearm = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.045, 0.45, 16), skinMat);
    rightForearm.position.set(0.2, 0.28, -0.38);
    rightForearm.rotation.x = 1.35;
    rightForearm.rotation.z = 0.3;
    devGroup.add(rightForearm);

    // Camera and Animation
    let targetCameraX = 2.4;
    let targetCameraY = 1.8;
    const handlePointerMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetCameraX = 2.4 + x * 0.8;
      targetCameraY = 1.8 - y * 0.5;
    };
    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      camera.position.x += (targetCameraX - camera.position.x) * 0.05;
      camera.position.y += (targetCameraY - camera.position.y) * 0.05;
      camera.lookAt(0, 0.2, 0);

      // Typing animation
      leftForearm.position.y = 0.28 + Math.sin(time * 14) * 0.015;
      rightForearm.position.y = 0.28 + Math.cos(time * 16) * 0.015;

      // Monitor pulse
      monitorLight.intensity = 2.2 + Math.sin(time * 3.5) * 0.5;
      screenMat.emissiveIntensity = 0.8 + Math.sin(time * 3.5) * 0.2;

      devTorso.position.y = 0.45 + Math.sin(time * 2) * 0.01;
      devHeadGroup.position.y = 1.05 + Math.sin(time * 2) * 0.012;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className={`desk-scene-3d-wrap ${className}`}
      style={{ width: '100%', height: '100%', minHeight: '400px', position: 'relative' }}
      title="3D Developer Desk Setup"
    />
  );
}
