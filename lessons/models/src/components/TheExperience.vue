<script setup lang="ts">
import { OrbitControls } from '@tresjs/cientos'
import TheLaptop from './TheLaptop.vue'
import TheStandingDesk from './TheStandingDesk.vue'
import ThePlant from './ThePlant.vue'
</script>

<template>
  <TresPerspectiveCamera
    :position="[5, 5, 5]"
  />
  <TresAmbientLight
    :intensity="0.5"
  />
  <TresDirectionalLight
    :position="[-2, 9, -4]"
    name="rimLight"
    :intensity="1"
    cast-shadow
  />
  <TresDirectionalLight
    :position="[4, 1, 4]"
    name="fillLight"
    :intensity="0.75"
    cast-shadow
  />
  <TresDirectionalLight
    :position="[-4, 2, 2]"
    name="keyLight"
    :intensity="1"
    cast-shadow
  />
  <Suspense>
    <TheLaptop />
  </Suspense>
  <Suspense>
    <TheStandingDesk />
  </Suspense>
  <Suspense>
    <ThePlant />
  </Suspense>
  <Suspense>
    <TheHeadphones />
  </Suspense>
  <OrbitControls />
</template>
