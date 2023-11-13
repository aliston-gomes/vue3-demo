<template>
  <div>
    <!-- <h1>{{ person.hobbies.game }}</h1> -->
    <v-btn> Button </v-btn>
  </div>
</template>
<script setup>
import { reactive, ref } from "vue";
const person = reactive({
  name: "aliston",
  age: "24",
  hobbies: { game: "BGMI" },
});
const games = reactive([]);
setTimeout(() => {
  person.hobbies.game = "COD";
}, 2000);
</script>
<style scoped></style>
<!-- !NOTE-->
<!-- in reactive variables we can only store object,array,map, etc it doesnt support boolean,string,number datatypes -->

<!-- reactivity means that whenever a variable is declared with the reactive keyword and is used on the template to diaplay and if we are changeing the value of the variable which is declared with the reactive keyword then it should reflect those thanged on the ui immediatly without refreshing the page -->

<!--reactive doesnt have the value property inside of the reactive object -->
