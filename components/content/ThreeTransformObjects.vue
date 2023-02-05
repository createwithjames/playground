<template>
  <div>
    <canvas class="aspect-[4/3] !h-auto !w-full rounded-xl" ref="canvas" />
  </div>
</template>

<script setup>
import * as THREE from "three";

const canvas = ref(null);

// Scene
const scene = new THREE.Scene();

// Red Cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff00ee });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Renderer
onMounted(() => {
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas.value,
  });

  renderer.setSize(sizes.width, sizes.height);

  renderer.render(scene, camera);
});
</script>
