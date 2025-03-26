<script setup lang="ts">
import { ContactShadows, Environment, OrbitControls } from '@tresjs/cientos'
import TheLaptop from './TheLaptop.vue'
import TheStandingDesk from './TheStandingDesk.vue'
import ThePlant from './ThePlant.vue'
import TheHeadphones from './TheHeadphones.vue'
</script>

<template>
  <TresPerspectiveCamera :position="[1.36, 1.26, 2.45]" />
  <OrbitControls :target="[0, 0.5, 0]" />
  <Suspense>
    <Environment preset="studio" :environment-intensity="0.3" />
  </Suspense>
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
  <ContactShadows
    :opacity="1"
    :blur="3.5"
    :resolution="1024"
    :frames="100"
  />
</template>
