<template>
  <div class="mx-auto max-w-7xl">
    <div class="px-8">
      <div class="grid grid-cols-1 gap-4">
        <h1>{{ data.title }}</h1>
        <canvas ref="canvas" />
      </div>
    </div>
  </div>
</template>

<script setup>
import * as THREE from "three";

const data = ref({
  title: "04 Local Server",
});

useHead({
  title: data.value.title,
});

// Refs
const canvas = ref(null);

// Scene
const scene = new THREE.Scene();

// Red Cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
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
