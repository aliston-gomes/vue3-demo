<template>
  <!-- <h3>This is a Global Component</h3> -->
  <h3>{{ name }}</h3>
</template>
<script setup>
import { ref } from "vue";
const name = ref("Global Component");
</script>
<style scoped>
h3 {
  color: coral;
}
</style>
