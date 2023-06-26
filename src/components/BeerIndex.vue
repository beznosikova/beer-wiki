<template>
  <div class="flex items-center justify-between pb-10">
    <header-logo/>
    <header-filter @updateFilter="updateFilter"/>
  </div>
  <div v-if="beers.length > 0">
    <div class="grid grid-cols-3 gap-5">
      <beer-card v-for="beer in beers" :ibu="beer.ibu" :name="beer.name" :food_paring="beer.food_paring" :id="beer.id"/>
    </div>
  </div>
  <div v-else>
    <div class="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
      <p class="font-bold">Nie znaleziono wyników</p>
      <p>Spróbuj zmienić parametry wyszukiwania</p>
    </div>
  </div>
  <div class="py-5 flex justify-end">
    <beer-pagination :activePage="activePage"/>
  </div>
</template>

<script>
import BeerCard from "./BeerCard.vue";
import BeerPagination from "./BeerPagination.vue";
import {fetchBeers} from "../services/beer-service.js";
import HeaderFilter from "./HeaderFilter.vue";
import HeaderLogo from "./HeaderLogo.vue";

export default {
  name: "BeerIndex",
  components: {
    HeaderLogo, HeaderFilter, BeerPagination, BeerCard
  },
  data() {
    return {
      beers: [],
      filter: {}
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
        this.beers = [...await fetchBeers({...this.filter, page: this.activePage})];
      } catch (error) {
        console.log('unexpected error: ', error);
      }
    },
    async updateFilter(filter) {
      this.filter = {...filter}
      await this.updateBeers();
    }
  },
}
</script>


