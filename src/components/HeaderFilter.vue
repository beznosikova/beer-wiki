<template>
  <div class="flex pl-5 items-center">
    <div class="h-14">
      <input type="search" placeholder="Nazwę piwa" v-model="filter.beer_name" class="form-input"/>
    </div>
    <div class="ml-4 h-14">
      <input type="text" placeholder="Goryczka (IBU)" v-model="filter.ibu" class="form-input"/>
      <p v-if="errors.ibu" class="text-red-500 text-xs italic mt-1 pl-2 text-left">Nieprawidłowy format danych, wprowadź
        liczbę.</p>
    </div>
    <div class="h-14">
      <select class="form-select" v-model="filter.order">
        <option value="ibu_gt">większe</option>
        <option value="ibu_lt">mniejsze</option>
      </select>
    </div>
    <div class="h-14">
      <button class="bg-yellow-400 hover:bg-yellow-500 py-2 px-4 rounded-full ml-4 border-none" @click="submitFiltering"
              :disabled="!validated">
        <img src="/search.svg">
      </button>
    </div>
    <div class="h-14">
      <button class="bg-gray-100 hover:bg-gray-200 rounded-full ml-4 py-2 px-4 border-none" @click="resetFilter">
        <img src="/x.svg">
      </button>
    </div>
  </div>
</template>
<script>

export default {
  name: "HeaderFilter",
  emits: ['updateFilter'],
  data() {
    return {
      filter: {},
      errors: {
        ibu: false
      }
    }
  },
  mounted() {
    this.resetFilter();
  },
  watch: {
    'filter.ibu'(value) {
      this.errors.ibu = !this.validateIbu(value)
    }
  },
  computed: {
    validated() {
      return Object.values(this.errors).some((error) => !error);
    },
    preparedFilter() {
      let {beer_name, ibu, order} = {...this.filter};
      let preparedFilter = {beer_name};

      if (ibu) {
        preparedFilter[order] = ibu;
      }
      return preparedFilter;
    }
  },
  methods: {
    validateIbu(value) {
      if (!value) {
        return true;
      }
      return /^\d*$/.test(value);
    },
    submitFiltering() {
      this.$emit('updateFilter', this.preparedFilter)
    },
    resetFilter() {
      this.filter = {
        beer_name: null,
        ibu: null,
        order: 'ibu_lt',
      }
      this.$emit('updateFilter', this.preparedFilter)
    }
  },
}
</script>