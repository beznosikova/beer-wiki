<template>
  <div class="rounded bg-slate-50">
    <router-link :to="{ name: 'Beer', params: { id }}" class="flex flex-col text-yellow-500 hover:text-yellow-300 hover:underline">
    <div class="px-6 py-4">
      <div class="font-bold text-xl">{{ name }}</div>
    </div>
    <div class="">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Goryczka (IBU): {{ ibu }}
          </span>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Parowanie jedzenia: {{ food_paring }}
          </span>
    </div>
  </router-link>
  </div>
</template>
<script setup>
  defineProps({
    name: String,
    ibu: Number,
    food_paring: Number,
    id: Number,
  })
</script>
