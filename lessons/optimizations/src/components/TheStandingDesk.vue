<script setup lang="ts">
import { useTexture, useTres } from '@tresjs/core'
import { useGLTF } from '@tresjs/cientos'
import { useState } from '../composables/useState'
import { watch } from 'vue'
import { Color, RepeatWrapping, SRGBColorSpace } from 'three'

const { nodes } = await useGLTF('/models/standing-desk.glb', {
  draco: true,
})
const table = nodes.Table
const legs = nodes.Leg
const control = nodes.Control
const hanger = nodes.Hanger

const { selectedTableMaterial, selectedAccessoriesColor } = useState()

const { invalidate } = useTres()

watch(selectedTableMaterial, async (material) => {
  if (!material) { return }

  const texture = await useTexture({
    map: `${material.path}/${material.filename}_Color.jpg`,
    normalMap: `${material.path}/${material.filename}_NormalDX.jpg`,
    roughnessMap: `${material.path}/${material.filename}_Roughness.jpg`,
    displacementMap: `${material.path}/${material.filename}_Displacement.jpg`,
  })

  invalidate()

  Object.keys(texture).forEach((key) => {
    const map = texture[key]
    if (!map) { return }

    map.wrapS = RepeatWrapping
    map.wrapT = RepeatWrapping
    map.anisotropy = 16
    map.colorSpace = SRGBColorSpace
    table.material[key] = map
  })
}, {
  immediate: true,
})

watch(selectedAccessoriesColor, (color) => {
  if (!color) { return }

  legs.material.color.set(new Color(color.color))
  legs.material.metalness = color.metalness
  legs.material.roughness = color.roughness
}, {
  immediate: true,
})
</script>

<template>
  <primitive :object="table" />
  <primitive :object="legs" />
  <primitive :object="control" />
  <primitive :object="hanger" />
</template>
