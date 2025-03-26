<script setup lang="ts">
import { TresCanvas, vLightHelper } from '@tresjs/core'
import { OrbitControls } from '@tresjs/cientos'
</script>

<template>
  <TresCanvas
    window-size
    clear-color="#4f4f4f"
    shadows
  >
    <TresPerspectiveCamera />
    <OrbitControls />
    <!-- Objects -->
    <TresMesh
      :position="[3, 4, 3]"
      cast-shadow
    >
      <TresBoxGeometry
        :args="[1, 1, 1]"
      />
      <TresMeshToonMaterial
        color="yellow"
      />
    </TresMesh>
    <TresMesh
      :position="[0, 2, 0]"
      cast-shadow
      receive-shadow
    >
      <TresTorusGeometry
        :args="[1, 0.4, 16, 100]"
      />
      <TresMeshToonMaterial
        color="teal"
      />
    </TresMesh>
    <!-- Lights -->
    <TresDirectionalLight
      v-light-helper
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
  </TresCanvas>
</template>
