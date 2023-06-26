<template>
  <header-panel/>
  <div v-if="beers.length > 0">
    <div class="grid grid-cols-3 gap-5">
      <beer-card v-for="beer in beers" :ibu="beer.ibu" :name="beer.name" :food_paring="beer.food_paring"/>
    </div>
    <div class="py-5 flex justify-end">
      <beer-pagination :activePage="activePage"/>
    </div>
  </div>
  <div v-else>
    <div class="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
      <p class="font-bold">Nie znaleziono wyników</p>
      <p>Spróbuj zmienić parametry wyszukiwania</p>
    </div>
  </div>
</template>

<script>
import BeerCard from "./BeerCard.vue";
import BeerPagination from "./BeerPagination.vue";
import HeaderPanel from "./HeaderPanel.vue";
import {fetchBeers} from "../services/beer-service.js";

export default {
  name: "BeerIndex",
  components: {
    'header-panel': HeaderPanel,
    'beer-pagination': BeerPagination,
    'beer-card': BeerCard,
  },
  data() {
    return {
      beers: []
    }
  },
  async mounted() {
    await this.updateBeers();
  },
  watch: {
    async '$route.query.page'(currentPage, prevPage) {
      if (currentPage !== prevPage) {
        await this.updateBeers();
      }
    }
  },
  computed: {
    activePage() {
      return parseInt(this.$route.query.page) || 1;
    },
  },
  methods: {
    async updateBeers() {
      try {
        this.beers = [...await fetchBeers({page: this.activePage})];
      } catch (error) {
        console.log('unexpected error: ', error);
      }
    }
  },
}

</script>


