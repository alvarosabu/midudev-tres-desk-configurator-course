<script setup lang="ts">
import { useGLTF } from '@tresjs/cientos'

const { nodes } = await useGLTF('/models/laptop.glb', {
  draco: true,
})

const model = nodes.Macbook
</script>

<template>
  <primitive :object="model" />
</template>
