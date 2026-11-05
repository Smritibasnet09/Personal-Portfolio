import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function AvatarHero3D({ className = '', isSidePose = false }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene & Camera
    const scene = new THREE.Scene();
    const width = container.clientWidth || 420;
    const height = container.clientHeight || 500;

    const camera = new THREE.PerspectiveCamera(36, width / height, 0.1, 100);
    camera.position.set(0, 0.15, 4.4);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    // Flattering Beauty Studio Lighting
    const ambientLight = new THREE.AmbientLight(0x38224f, 1.4);
    scene.add(ambientLight);

    // Soft front beauty key light (warm, flattering)
    const keyLight = new THREE.DirectionalLight(0xfff5ea, 1.4);
    keyLight.position.set(0.2, 2.5, 4.0);
    scene.add(keyLight);

    // Left lavender rim light
    const leftRimLight = new THREE.PointLight(0xc084fc, 2.8, 15);
    leftRimLight.position.set(-3.2, 1.6, 1.6);
    scene.add(leftRimLight);

    // Right soft rose/pink rim light
    const rightRimLight = new THREE.PointLight(0xf472b6, 2.6, 15);
    rightRimLight.position.set(3.2, 1.2, 1.4);
    scene.add(rightRimLight);

    // Bottom purple bounce light
    const bounceLight = new THREE.PointLight(0xa855f7, 1.2, 10);
    bounceLight.position.set(0, -2.2, 2.0);
    scene.add(bounceLight);

    // Materials
    // Warm natural porcelain skin
    const skinMat = new THREE.MeshStandardMaterial({
      color: 0xffede6,
      roughness: 0.42,
      metalness: 0.02,
    });

    // Dark brown/black silky hair
    const hairMat = new THREE.MeshStandardMaterial({
      color: 0x1c1724,
      roughness: 0.32,
      metalness: 0.12,
    });

    // Iris (Vibrant purple/violet gradient with inner glow)
    const irisMat = new THREE.MeshStandardMaterial({
      color: 0xa855f7,
      emissive: 0x581c87,
      roughness: 0.15,
    });

    // Deep Pupil
    const pupilMat = new THREE.MeshBasicMaterial({ color: 0x050408 });

    // Eye Sclera (Clean soft white)
    const eyeWhiteMat = new THREE.MeshStandardMaterial({
      color: 0xfdfdfd,
      roughness: 0.1,
    });

    // Cheerful Rose Lips
    const lipMat = new THREE.MeshStandardMaterial({
      color: 0xec4899,
      roughness: 0.35,
      metalness: 0.05,
    });

    // Soft Peach Blush
    const blushMat = new THREE.MeshBasicMaterial({
      color: 0xf472b6,
      transparent: true,
      opacity: 0.32,
    });

    // Eyeliner / Lashes
    const lashMat = new THREE.MeshBasicMaterial({ color: 0x140e1b });

    // Chic Outfit (Pastel Lavender Blazer / Top)
    const outfitMat = new THREE.MeshStandardMaterial({
      color: 0x241838,
      roughness: 0.55,
      metalness: 0.05,
    });

    const innerTopMat = new THREE.MeshStandardMaterial({
      color: 0xf5f3f8,
      roughness: 0.4,
    });

    // Silver Necklace
    const silverMat = new THREE.MeshStandardMaterial({
      color: 0xe0e7ff,
      metalness: 0.9,
      roughness: 0.15,
    });

    // Root Group
    const characterGroup = new THREE.Group();
    scene.add(characterGroup);

    if (isSidePose) {
      characterGroup.position.set(0, -0.42, 0);
      characterGroup.rotation.y = 0.3;
    } else {
      characterGroup.position.set(0, -0.48, 0);
    }

    // Torso / Shoulders (Feminine silhouette with blazer lapels)
    const torsoGroup = new THREE.Group();
    characterGroup.add(torsoGroup);

    const torsoGeo = new THREE.CylinderGeometry(0.7, 1.05, 1.5, 32);
    const torso = new THREE.Mesh(torsoGeo, outfitMat);
    torso.position.set(0, -0.95, 0);
    torso.scale.set(1.25, 1.0, 0.65);
    torsoGroup.add(torso);

    // Inner White Top
    const innerTopGeo = new THREE.CylinderGeometry(0.45, 0.65, 1.1, 24);
    const innerTop = new THREE.Mesh(innerTopGeo, innerTopMat);
    innerTop.position.set(0, -0.75, 0.08);
    innerTop.scale.set(1.0, 1.0, 0.6);
    torsoGroup.add(innerTop);

    // Blazer Lapel Left
    const lapelGeo = new THREE.BoxGeometry(0.18, 0.85, 0.06);
    const leftLapel = new THREE.Mesh(lapelGeo, outfitMat);
    leftLapel.position.set(-0.32, -0.68, 0.28);
    leftLapel.rotation.z = -0.22;
    torsoGroup.add(leftLapel);

    const rightLapel = new THREE.Mesh(lapelGeo, outfitMat);
    rightLapel.position.set(0.32, -0.68, 0.28);
    rightLapel.rotation.z = 0.22;
    torsoGroup.add(rightLapel);

    // Collarbone / Slender Neck
    const neckGeo = new THREE.CylinderGeometry(0.2, 0.25, 0.55, 24);
    const neck = new THREE.Mesh(neckGeo, skinMat);
    neck.position.set(0, 0.02, 0);
    characterGroup.add(neck);

    // Delicate Necklace
    const necklaceGeo = new THREE.TorusGeometry(0.24, 0.014, 12, 36);
    const necklace = new THREE.Mesh(necklaceGeo, silverMat);
    necklace.rotation.x = Math.PI / 2.2;
    necklace.position.set(0, -0.12, 0.06);
    characterGroup.add(necklace);

    const pendantGeo = new THREE.SphereGeometry(0.035, 16, 16);
    const pendant = new THREE.Mesh(pendantGeo, new THREE.MeshBasicMaterial({ color: 0xc084fc }));
    pendant.position.set(0, -0.24, 0.22);
    characterGroup.add(pendant);

    // Head Group (for mouse tracking & nods)
    const headGroup = new THREE.Group();
    headGroup.position.set(0, 0.42, 0);
    characterGroup.add(headGroup);

    // Head Base (Delicate oval shape)
    const headGeo = new THREE.SphereGeometry(0.62, 36, 36);
    const headMesh = new THREE.Mesh(headGeo, skinMat);
    headMesh.scale.set(0.96, 1.14, 0.96);
    headGroup.add(headMesh);

    // Cute Soft Chin
    const chinGeo = new THREE.SphereGeometry(0.28, 24, 24);
    const chinMesh = new THREE.Mesh(chinGeo, skinMat);
    chinMesh.position.set(0, -0.42, 0.32);
    chinMesh.scale.set(0.9, 0.65, 0.85);
    headGroup.add(chinMesh);

    // Petite Cute Nose
    const noseGeo = new THREE.SphereGeometry(0.065, 20, 20);
    const nose = new THREE.Mesh(noseGeo, skinMat);
    nose.position.set(0, -0.02, 0.62);
    nose.scale.set(0.85, 1.15, 0.9);
    headGroup.add(nose);

    // Sweet Rosy Lips (Soft smile curve)
    const mouthGroup = new THREE.Group();
    mouthGroup.position.set(0, -0.22, 0.58);
    headGroup.add(mouthGroup);

    const upperLipCurve = new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(-0.14, 0, 0),
      new THREE.Vector3(0, 0.035, 0.02),
      new THREE.Vector3(0.14, 0, 0)
    );
    const upperLip = new THREE.Mesh(new THREE.TubeGeometry(upperLipCurve, 16, 0.018, 8, false), lipMat);
    mouthGroup.add(upperLip);

    const lowerLipGeo = new THREE.SphereGeometry(0.065, 16, 16);
    const lowerLip = new THREE.Mesh(lowerLipGeo, lipMat);
    lowerLip.position.set(0, -0.03, 0);
    lowerLip.scale.set(1.4, 0.45, 0.6);
    mouthGroup.add(lowerLip);

    // Cute Blushing Cheeks
    const blushGeo = new THREE.CircleGeometry(0.11, 24);
    const leftBlush = new THREE.Mesh(blushGeo, blushMat);
    leftBlush.position.set(-0.35, -0.08, 0.52);
    leftBlush.rotation.y = -Math.PI / 8;
    headGroup.add(leftBlush);

    const rightBlush = new THREE.Mesh(blushGeo, blushMat);
    rightBlush.position.set(0.35, -0.08, 0.52);
    rightBlush.rotation.y = Math.PI / 8;
    headGroup.add(rightBlush);

    // Petite Cute Ears with small earrings
    const earGeo = new THREE.TorusGeometry(0.14, 0.045, 14, 20);
    const leftEar = new THREE.Mesh(earGeo, skinMat);
    leftEar.position.set(-0.62, 0.02, -0.05);
    leftEar.rotation.y = -Math.PI / 7;
    leftEar.scale.set(1, 1.15, 0.8);
    headGroup.add(leftEar);

    // Small Gold/Silver Earring
    const earringGeo = new THREE.TorusGeometry(0.04, 0.012, 8, 16);
    const leftEarring = new THREE.Mesh(earringGeo, silverMat);
    leftEarring.position.set(-0.64, -0.12, -0.05);
    headGroup.add(leftEarring);

    const rightEar = leftEar.clone();
    rightEar.position.set(0.62, 0.02, -0.05);
    rightEar.rotation.y = Math.PI / 7;
    headGroup.add(rightEar);

    const rightEarring = leftEarring.clone();
    rightEarring.position.set(0.64, -0.12, -0.05);
    headGroup.add(rightEarring);

    // Big Beautiful Anime/Pixar Eyes with Eyelashes
    const eyesGroup = new THREE.Group();
    headGroup.add(eyesGroup);

    const createEye = (x, isLeft) => {
      const eyeParent = new THREE.Group();
      eyeParent.position.set(x, 0.08, 0.51);

      // Sclera
      const sclera = new THREE.Mesh(new THREE.SphereGeometry(0.14, 24, 24), eyeWhiteMat);
      sclera.scale.set(1.15, 0.95, 0.85);
      eyeParent.add(sclera);

      // Pupil / Iris Group
      const pupilGroup = new THREE.Group();
      pupilGroup.position.set(0, 0, 0.1);

      // Iris
      const iris = new THREE.Mesh(new THREE.CircleGeometry(0.085, 24), irisMat);
      pupilGroup.add(iris);

      // Pupil
      const pupil = new THREE.Mesh(new THREE.CircleGeometry(0.048, 20), pupilMat);
      pupil.position.z = 0.005;
      pupilGroup.add(pupil);

      // Specular Star Twinkles (Primary + Secondary Highlight)
      const star1 = new THREE.Mesh(new THREE.CircleGeometry(0.024, 16), new THREE.MeshBasicMaterial({ color: 0xffffff }));
      star1.position.set(0.03, 0.03, 0.01);
      pupilGroup.add(star1);

      const star2 = new THREE.Mesh(new THREE.CircleGeometry(0.012, 12), new THREE.MeshBasicMaterial({ color: 0xffffff }));
      star2.position.set(-0.025, -0.025, 0.01);
      pupilGroup.add(star2);

      eyeParent.add(pupilGroup);

      // Curved Dark Upper Eyelash Line (Feminine wing)
      const lashCurve = new THREE.QuadraticBezierCurve3(
        new THREE.Vector3(isLeft ? -0.14 : -0.12, 0.08, 0.08),
        new THREE.Vector3(0, 0.13, 0.1),
        new THREE.Vector3(isLeft ? 0.12 : 0.14, 0.09, 0.08)
      );
      const lashLine = new THREE.Mesh(new THREE.TubeGeometry(lashCurve, 16, 0.018, 8, false), lashMat);
      eyeParent.add(lashLine);

      // Outer Wing Flick
      const wingGeo = new THREE.ConeGeometry(0.02, 0.06, 8);
      const wing = new THREE.Mesh(wingGeo, lashMat);
      wing.position.set(isLeft ? -0.14 : 0.14, 0.09, 0.08);
      wing.rotation.z = isLeft ? 1.1 : -1.1;
      eyeParent.add(wing);

      // Upper Eyelid for Blinking
      const eyelidGeo = new THREE.SphereGeometry(0.155, 24, 20, 0, Math.PI * 2, 0, Math.PI * 0.52);
      const eyelid = new THREE.Mesh(eyelidGeo, skinMat);
      eyelid.rotation.x = 0.1;
      eyeParent.add(eyelid);

      return { eyeParent, pupilGroup, eyelid };
    };

    const leftEye = createEye(-0.23, true);
    const rightEye = createEye(0.23, false);
    eyesGroup.add(leftEye.eyeParent);
    eyesGroup.add(rightEye.eyeParent);

    // Delicate Arched Eyebrows
    const createBrow = (x, rotZ) => {
      const browCurve = new THREE.QuadraticBezierCurve3(
        new THREE.Vector3(-0.13, 0, 0),
        new THREE.Vector3(0, 0.035, 0.02),
        new THREE.Vector3(0.13, -0.02, 0)
      );
      const browGeo = new THREE.TubeGeometry(browCurve, 16, 0.018, 8, false);
      const brow = new THREE.Mesh(browGeo, hairMat);
      brow.position.set(x, 0.28, 0.54);
      brow.rotation.z = rotZ;
      return brow;
    };
    const leftBrow = createBrow(-0.24, 0.08);
    const rightBrow = createBrow(0.24, -0.08);
    headGroup.add(leftBrow);
    headGroup.add(rightBrow);

    // --- Long Flowing Dark Hair (Matching Smriti's style) ---
    const hairGroup = new THREE.Group();
    headGroup.add(hairGroup);

    // Crown Cap
    const crownCap = new THREE.Mesh(
      new THREE.SphereGeometry(0.66, 32, 32, 0, Math.PI * 2, 0, Math.PI * 0.58),
      hairMat
    );
    crownCap.position.set(0, 0.12, -0.04);
    crownCap.scale.set(1.05, 1.12, 1.05);
    hairGroup.add(crownCap);

    // Side-swept Soft Bangs / Fringe
    const bangCurveLeft = new THREE.CubicBezierCurve3(
      new THREE.Vector3(-0.02, 0.52, 0.45),
      new THREE.Vector3(-0.25, 0.42, 0.55),
      new THREE.Vector3(-0.45, 0.25, 0.45),
      new THREE.Vector3(-0.55, 0.05, 0.35)
    );
    const bangLeft = new THREE.Mesh(new THREE.TubeGeometry(bangCurveLeft, 24, 0.09, 12, false), hairMat);
    hairGroup.add(bangLeft);

    const bangCurveRight = new THREE.CubicBezierCurve3(
      new THREE.Vector3(-0.02, 0.52, 0.45),
      new THREE.Vector3(0.25, 0.45, 0.55),
      new THREE.Vector3(0.48, 0.28, 0.45),
      new THREE.Vector3(0.58, 0.08, 0.35)
    );
    const bangRight = new THREE.Mesh(new THREE.TubeGeometry(bangCurveRight, 24, 0.085, 12, false), hairMat);
    hairGroup.add(bangRight);

    // Long Locks Falling Over Left Shoulder
    const leftLockCurve = new THREE.CubicBezierCurve3(
      new THREE.Vector3(-0.48, 0.15, 0.2),
      new THREE.Vector3(-0.55, -0.35, 0.32),
      new THREE.Vector3(-0.45, -0.75, 0.35),
      new THREE.Vector3(-0.35, -1.05, 0.32)
    );
    const leftLock = new THREE.Mesh(new THREE.TubeGeometry(leftLockCurve, 32, 0.11, 14, false), hairMat);
    characterGroup.add(leftLock);

    // Long Locks Falling Over Right Shoulder
    const rightLockCurve = new THREE.CubicBezierCurve3(
      new THREE.Vector3(0.48, 0.15, 0.2),
      new THREE.Vector3(0.55, -0.35, 0.32),
      new THREE.Vector3(0.45, -0.75, 0.35),
      new THREE.Vector3(0.35, -1.05, 0.32)
    );
    const rightLock = new THREE.Mesh(new THREE.TubeGeometry(rightLockCurve, 32, 0.11, 14, false), hairMat);
    characterGroup.add(rightLock);

    // Back Hair Falling Down the Back
    const backHairGeo = new THREE.CylinderGeometry(0.55, 0.72, 1.4, 24);
    const backHair = new THREE.Mesh(backHairGeo, hairMat);
    backHair.position.set(0, -0.4, -0.38);
    backHair.scale.set(1.15, 1.0, 0.65);
    characterGroup.add(backHair);

    // Hair volume behind ears
    const leftEarHair = new THREE.Mesh(new THREE.SphereGeometry(0.28, 16, 16), hairMat);
    leftEarHair.position.set(-0.45, 0.15, -0.15);
    headGroup.add(leftEarHair);

    const rightEarHair = new THREE.Mesh(new THREE.SphereGeometry(0.28, 16, 16), hairMat);
    rightEarHair.position.set(0.45, 0.15, -0.15);
    headGroup.add(rightEarHair);

    // Mouse Tracking & State
    let mouseX = 0;
    let mouseY = 0;
    let targetRotY = isSidePose ? 0.3 : 0;
    let targetRotX = 0;
    let currentRotY = targetRotY;
    let currentRotX = 0;

    const handlePointerMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      mouseX = x;
      mouseY = y;

      targetRotY = (isSidePose ? 0.25 : 0) + x * 0.7;
      targetRotX = y * 0.38;
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    // Natural Blinking
    let blinkProgress = 0;
    let isBlinking = false;
    let nextBlinkTime = performance.now() + 2000;

    // Interactive Click Nod
    let nodProgress = 0;
    const handleClick = () => {
      nodProgress = Math.PI;
    };
    container.addEventListener('click', handleClick);

    // Animation Loop
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();
      const now = performance.now();

      // Smooth Head Lerp
      currentRotY += (targetRotY - currentRotY) * 0.08;
      currentRotX += (targetRotX - currentRotX) * 0.08;

      let nodOffset = 0;
      if (nodProgress > 0) {
        nodOffset = Math.sin(nodProgress) * 0.16;
        nodProgress -= 0.1;
      }

      headGroup.rotation.y = currentRotY;
      headGroup.rotation.x = currentRotX + nodOffset;

      // Eye Tracking
      const pupilShiftX = mouseX * 0.035;
      const pupilShiftY = -mouseY * 0.025;
      leftEye.pupilGroup.position.x = pupilShiftX;
      leftEye.pupilGroup.position.y = pupilShiftY;
      rightEye.pupilGroup.position.x = pupilShiftX;
      rightEye.pupilGroup.position.y = pupilShiftY;

      // Natural Blinking
      if (!isBlinking && now > nextBlinkTime) {
        isBlinking = true;
        blinkProgress = 0;
      }
      if (isBlinking) {
        blinkProgress += 0.2;
        const blinkScale = Math.sin(blinkProgress);
        leftEye.eyelid.scale.y = 1 + blinkScale * 0.9;
        rightEye.eyelid.scale.y = 1 + blinkScale * 0.9;

        if (blinkProgress >= Math.PI) {
          isBlinking = false;
          leftEye.eyelid.scale.y = 1;
          rightEye.eyelid.scale.y = 1;
          nextBlinkTime = now + 2500 + Math.random() * 3000;
        }
      }

      // Gentle Breathing
      const breathing = Math.sin(elapsedTime * 2.2) * 0.02;
      characterGroup.position.y = (isSidePose ? -0.42 : -0.48) + breathing;

      // Subtle dynamic rim lights
      leftRimLight.intensity = 2.6 + Math.sin(elapsedTime * 1.5) * 0.3;
      rightRimLight.intensity = 2.4 + Math.cos(elapsedTime * 1.5) * 0.3;

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
      container.removeEventListener('click', handleClick);
      cancelAnimationFrame(animationFrameId);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [isSidePose]);

  return (
    <div
      ref={mountRef}
      className={`avatar-3d-canvas-wrap ${className}`}
      style={{ width: '100%', height: '100%', minHeight: '400px', position: 'relative', cursor: 'grab' }}
      title="Interactive 3D Avatar (Move cursor or click!)"
    />
  );
}
