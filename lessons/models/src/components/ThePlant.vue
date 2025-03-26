<script setup lang="ts">
import { useGLTF } from '@tresjs/cientos'

const { nodes } = await useGLTF('/models/plant.glb', { draco: true })

const model = nodes.Plant
</script>

<template>
  <primitive :object="model" />
</template>
