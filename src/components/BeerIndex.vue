<script setup>
import { ref } from 'vue'


const beers = ref([
    {"name": "Buzz", "ibu": 10, "food_paring": 2},
    {"name": "Buzz", "ibu": 10, "food_paring": 2},
    {"name": "Buzz", "ibu": 10, "food_paring": 2},
    {"name": "Buzz", "ibu": 10, "food_paring": 2},
    {"name": "Buzz", "ibu": 10, "food_paring": 2},
    {"name": "Buzz", "ibu": 10, "food_paring": 2},
    {"name": "Buzz", "ibu": 10, "food_paring": 2},
    {"name": "Buzz", "ibu": 10, "food_paring": 2},
    {"name": "Buzz", "ibu": 10, "food_paring": 2},
    {"name": "Buzz", "ibu": 10, "food_paring": 2},
])
</script>

<template>
  <div class="grid grid-cols-3 gap-5">
    <div class="card rounded bg-slate-50" v-for="beer in beers">
      <a href="#" class="text-yellow-500 hover:text-yellow-300 hover:underline">
         <div class="px-6 py-4">
          <div class="font-bold text-xl">{{ beer.name}}</div>
        </div>
        <div class="">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Goryczka (IBU): {{ beer.ibu }}
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Parowanie jedzenia: {{ beer.food_paring }}
          </span>
        </div>
      </a>
    </div>
  </div>

</template>
