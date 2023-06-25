<template>
  <div class="flex gap-3">
    <a
        v-for="n in 4"
        @click="onChangePage(n)"
        class="w-10 h-10 p-2 text-yellow-500 hover:text-yellow-300 border">
      {{ n }}
    </a>
  </div>
</template>
<script>
export default {
  name: "BeerPagination",
  data() {
    return {
      beers: []
    }
  },
  methods: {
    onChangePage(page) {
      console.log(page)
    },

  },
}

</script>
