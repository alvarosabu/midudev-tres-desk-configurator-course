<script setup lang="ts">
import { TresCanvas } from '@tresjs/core'
import UITableSelector from './components/UITableSelector.vue'
import UIAccessoriesSelector from './components/UIAccessoriesSelector.vue'
import TheExperience from './components/TheExperience.vue'
import { TresLeches, useControls } from '@tresjs/leches'
import '@tresjs/leches/styles'
import { ref } from 'vue'

const renderTimes = ref(0)

useControls('fpsgraph')

useControls({
  renderTimes: {
    value: renderTimes,
    type: 'graph',
    label: 'Render Times (ms)',
    onUpdate: () => {
      renderTimes.value = 0
    },
  },
})

function onRender() {
  renderTimes.value = 1
}
</script>

<template>
  <main class="relative mx-auto h-screen flex items-center">
    <div class="w-full h-screen flex">
      <section class="min-h-400px w-2/3">
        <TresLeches />
        <TresCanvas render-mode="on-demand" alpha @render="onRender">
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
          <UITableSelector />
          <UIAccessoriesSelector />
        </div>
      </aside>
    </div>
  </main>
</template>
