
<template>
    <div class="flex pl-5">
      <input type="search" placeholder="Nazwę piwa" class="form-input"/>
      <input type="text" placeholder="Goryczka (IBU)" class="form-input ml-4"/>
      <select class="form-select">
        <option value="gt">większe </option>
        <option value="lt">mniejsze </option>
      </select>
      <button class="bg-yellow-400 hover:bg-yellow-500 py-2 px-4 rounded-full ml-4 border-none"><img src="/search.svg"></button>
      <button class="bg-gray-100 hover:bg-gray-200 rounded-full ml-4 py-2 px-4 border-none"><img src="/x.svg"></button>
    </div>
</template>
<script setup>
</script>