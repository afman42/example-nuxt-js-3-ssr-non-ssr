<template>
  <div class="mt-2">
    <div v-for="(item, index) in data" class="card mb-2" :key="index">
      <div class="card-body">
        <h3>{{ item.title }}</h3>
        <p>{{ item.body }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
//const { data } = await useFetch("/api/json-placeholder");
const { data } = await useAsyncData("json-placeholder", () =>
  $fetch("https://jsonplaceholder.typicode.com/posts")
);

useHead({
  title: "My App",
  meta: [{ name: "description", content: "My amazing site." }],
});
</script>
