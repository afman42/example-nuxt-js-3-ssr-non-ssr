<template>
  <div class="mt-2">
    <div v-for="(item, index) in data" class="card mb-2">
      <div class="card-body">
        <h3>{{ item.name }} - {{ item.email }}</h3>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data } = await useFetch("https://jsonplaceholder.typicode.com/users");
//const { data } = await useAsyncData("json-placeholder", () =>
// $fetch("https://jsonplaceholder.typicode.com/posts")
//);
</script>
