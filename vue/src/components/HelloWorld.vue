<template>
  <section>
    <h1>
      {{ name }}
    </h1>
    <span v-html="html"></span>
    <span :id="name"></span>
    <!--GLOBAL COMPONENT -->
    <!-- <GlobalComponent />/ -->
    <!-- TEXT INTERPOLATION -->
    <TextInterpolation />
  </section>
</template>
<script setup>
import { ref } from "vue";
import TextInterpolation from "./TextInterpolation.vue";
//VARIABLES
const name = ref("VUE-JS");
const html = ref(`<p >Html</p>`);
</script>
<style></style>
