<script setup lang="ts">
import { useState } from '../composables/useState'

const { accessoriesColors, selectedAccessoriesColor } = useState()
</script>

<template>
  <h2 class="mt-8 scroll-m-20 text-lg font-semibold tracking-tight">
    Color de los accesorios de la mesa
  </h2>
  <ul class="py-8 flex gap-4 flex-wrap list-none justify-start ml-0 pl-0">
    <li
      v-for="(material, index) in accessoriesColors"
      :key="index"
      class="relative"
    >
      <span
        v-show="selectedAccessoriesColor.name === material.name"
        class="absolute -right-1 -top-2 bg-gray-200 text-dark-700 text-xs p-2 flex items-center justify-center rounded-full "
      >
        <i class="i-carbon-checkmark"></i>
      </span>
      <div
        class="p-2 flex flex-col items-center hover:bg-dark-800 transition-all duration-100 ease-in-out cursor-pointer"
        @click="selectedAccessoriesColor = material"
      >
        <div
          class="w-16 h-16 mb-4 rounded-full border border-2"
          :class="[
            material.color === '#ffffff' ? 'border-gray' : 'border-transparent',
          ]"
          :style="{ background: material.color }"
        ></div>
        <span class="text-sm text-semibold">{{ material.name }}</span>
      </div>
    </li>
  </ul>
</template>
