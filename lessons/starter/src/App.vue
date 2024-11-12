<script setup lang="ts">
import { TresCanvas } from '@tresjs/core'

import TheExperience from './components/TheExperience.vue'
</script>

<template>
  <main class="relative mx-auto h-screen flex items-center">
    <div class="w-full h-screen flex">
      <section class="min-h-400px w-2/3">
        <TresCanvas alpha>
          <TheExperience />
        </TresCanvas>
      </section>
      <aside class="bg-dark text-gray shadow-md w-1/3">
        <header class="p-8 bg-dark-700">
          <h1>
            Configurador de escritorio
          </h1>
        </header>
        <div class="p-8">
        </div>
      </aside>
    </div>
  </main>
</template>
