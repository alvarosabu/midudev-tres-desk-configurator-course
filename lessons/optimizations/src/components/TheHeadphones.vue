<script setup lang="ts">
import { useGLTF } from '@tresjs/cientos'

const { nodes } = await useGLTF('/models/headphones.glb', { draco: true })

const model = nodes.Headphones
</script>

<template>
  <primitive :object="model" />
</template>
