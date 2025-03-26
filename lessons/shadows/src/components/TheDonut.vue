<script setup lang="ts">
import { useLoop } from '@tresjs/core'
import { ref } from 'vue'

const donutRef = ref()
const { onBeforeRender } = useLoop()

onBeforeRender(({ delta, elapsed }) => {
  // console.log(donutRef.value)
  if (!donutRef.value) { return }

  donutRef.value.rotation.y += delta
  donutRef.value.position.x = Math.sin(elapsed) + 2
})
</script>

<template>
  <TresMesh
    ref="donutRef"
    :position="[0, 2, 0]"
    cast-shadow
  >
    <TresTorusGeometry
      :args="[1, 0.4, 16, 100]"
    />
    <TresMeshToonMaterial
      color="teal"
    />
  </TresMesh>
</template>
