<script setup lang="ts">
import { useState } from '../composables/useState'

const { tableMaterials, selectedTableMaterial } = useState()
</script>

<template>
  <h2 class="mt-8 scroll-m-20 text-lg font-semibold tracking-tight">
    Acabado de la tabla
  </h2>
  <ul class="py-8 flex gap-4 flex-wrap list-none justify-start ml-0 pl-0">
    <li
      v-for="(material, index) in tableMaterials"
      :key="index"
      class="relative"
    >
      <span
        v-show="selectedTableMaterial.name === material.name"
        class="absolute -right-1 -top-2 bg-gray-200 text-dark-700 text-xs p-2 flex items-center justify-center rounded-full "
      >
        <i class="i-carbon-checkmark"></i>
      </span>
      <div
        class="p-2 flex flex-col items-center hover:bg-dark-800 transition-all duration-100 ease-in-out cursor-pointer"
        @click="selectedTableMaterial = material"
      >
        <img class="w-16 h-16 mb-4" width="64" height="64" :src="material.thumbnail" :alt="material.name" />
        <span class="text-sm text-semibold">{{ material.name }}</span>
      </div>
    </li>
  </ul>
</template>
