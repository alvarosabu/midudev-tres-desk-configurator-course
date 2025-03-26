<script setup lang="ts">
import { useGLTF } from '@tresjs/cientos'

const { nodes } = await useGLTF('/models/standing-desk.glb', {
  draco: true,
})
const table = nodes.Table
const legs = nodes.Leg
const control = nodes.Control
const hanger = nodes.Hanger
</script>

<template>
  <primitive :object="table" />
  <primitive :object="legs" />
  <primitive :object="control" />
  <primitive :object="hanger" />
</template>
