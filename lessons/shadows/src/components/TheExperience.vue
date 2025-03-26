<script setup lang="ts">
import { OrbitControls } from '@tresjs/cientos'
import TheDonut from './TheDonut.vue'
</script>

<template>
  <TresPerspectiveCamera />
  <OrbitControls />
  <!-- Objects -->
  <TheDonut />
  <!-- Lights -->
  <TresDirectionalLight
    :position="[5, 5, 4.5]"
    :intensity="2"
    cast-shadow
  />
  <TresAmbientLight />
  <!-- Floor -->
  <TresMesh
    :rotation="[-Math.PI / 2, 0, 0]"
    receive-shadow
  >
    <TresPlaneGeometry
      :args="[20, 20]"
    />
    <TresMeshStandardMaterial
      color="#f4f4f4"
    />
  </TresMesh>
  <TresAxesHelper />
</template>
