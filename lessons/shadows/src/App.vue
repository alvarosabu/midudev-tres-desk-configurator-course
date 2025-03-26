<script setup lang="ts">
import { TresCanvas } from '@tresjs/core'
import TheExperience from './components/TheExperience.vue'
</script>

<template>
  <TresCanvas
    window-size
    clear-color="#4f4f4f"
    shadows
  >
    <TheExperience />
  </TresCanvas>
</template>
