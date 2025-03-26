<script setup lang="ts">
import { TresCanvas, vLightHelper } from '@tresjs/core'
import { OrbitControls } from '@tresjs/cientos'
</script>

<template>
  <TresCanvas window-size clear-color="#4f4f4f">
    <TresPerspectiveCamera />
    <OrbitControls />
    <TresMesh>
      <TresTorusGeometry />
      <TresMeshPhysicalMaterial
        color="white"
        :metalness="0.5"
      />
    </TresMesh>
    <TresAmbientLight :args="['white', 2]" />
    <TresDirectionalLight
      v-light-helper
      :args="['blue', 1]"
      :position="[4, 4, 2]"
    />
    <TresDirectionalLight
      v-light-helper
      :args="['red', 0.5]"
      :position="[-4, 2, 2]"
    />
    <TresAxesHelper />
  </TresCanvas>
</template>
