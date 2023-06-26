<template>
  <div class="rounded bg-slate-50 relative text-left flex flex-col gap-5 pb-10" v-if="beer">
    <div class="flex border-b-2">
      <img v-if="beer.image_url" :src="beer.image_url" class="beer-image">
      <div class="flex flex-col gap-10 justify-start card">
        <h1 class="text-yellow-500 ">{{ beer.name }}</h1>
        <div>{{ beer.tagline }}, IBU:{{ beer.ibu }}, ABV:{{ beer.abv }}</div>
        <div>{{ beer.description }}</div>
      </div>
    </div>
    <div v-if="beer.food_pairing?.length" class="ml-10">
      <div class="text-yellow-500 font-bold">Food pairing</div>
      <ul class="list-disc list-inside mt-5">
        <li v-for="pairing in beer.food_pairing">{{ pairing }}</li>
      </ul>
    </div>

    <div v-if="nickName?.length" class="ml-10">
      <div class="text-yellow-500 font-bold">Author {{ nickName }}</div>
    </div>

    <button class="absolute top-2 right-2 bg-gray-100 hover:bg-gray-200 rounded-full ml-4 py-2 px-4 border-none"
            @click="$router.back()">
      <img src="/arrow-left.svg">
    </button>
  </div>
  <div v-else>
    Trwa pobieranie...
  </div>
</template>
<script>

import {fetchBeerById} from "../services/beer-service.js";

export default {
  name: "BeerItem",
  data() {
    return {
      beer: null,
    }
  },
  async mounted() {
    this.beer = await fetchBeerById(this.$route.params.id);
  },
  computed: {
    nickName() {
      let matches = /<(\w+)>/.exec(this.beer.contributed_by);
      return matches ? matches[1] : null;
    }
  },
}
</script>
<style>
.beer-image {
  max-height: 300px;
  margin: 50px;
}
</style>
