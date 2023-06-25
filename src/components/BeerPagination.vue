<template>
  <div class="flex gap-3">
    <div
        v-for="n in 4"
        @click="onChangePage(n)"
        class="w-10 h-10 p-2 text-yellow-500 border"
        :class="{ 'cursor-pointer hover:text-yellow-300': activePage != n, 'bg-gray-200': activePage == n }"
    >
      {{ n }}
    </div>

  </div>
</template>
<script>
export default {
  name: "BeerPagination",
  props: {
    activePage: {
      type: Number,
      required: true
    }
  },
  methods: {
    onChangePage(page) {
      if (this.activePage !== page) {
        this.$router.push({path: "/", query: {page}});
      }
    },
  },
}

</script>
