<script setup lang="ts">
import "bootstrap/dist/css/bootstrap.min.css";
</script>
<template>
  <div class="container mt-5 d-flex flex-column">
    <div class="d-flex flex-row justify-content-center">
      <nuxt-link to="/" class="btn btn-primary mr-2">SSR</nuxt-link>
      <nuxt-link to="/no-ssr" class="btn btn-secondary">NO SSR</nuxt-link>
    </div>
    <slot />
  </div>
</template>
