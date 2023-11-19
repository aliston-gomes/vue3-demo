<template>
  <v-container class="flex-row align-center justify-center">
    <v-card
      text="COUNT"
      variant="tonal"
      outlined
      class="mx-auto text-center elevation-6 custom-background color text-lg-h1 font-weight-bold"
      max-width="344"
      min-height="200"
    >
      <v-card-item>
        <div>{{ count }}</div>
        <v-divider></v-divider>

        <!-- <div class="d-flex align-center flex-column bg-grey-lighten-4 pa-6"> -->
        <v-btn-toggle divided>
          <v-btn @click="Increment">ADD</v-btn>
          <v-btn @click="Decrement">SUB</v-btn>
          <v-btn @click="Reset">RST</v-btn>
          <v-btn>{{ doubleCount }}</v-btn>
          <!-- <button @click.stop="doubleCount">Double</button> -->
          <!-- <v-btn icon="mdi-format-align-justify"></v-btn> -->
        </v-btn-toggle>
        <!-- </div> -->
      </v-card-item>
    </v-card>
  </v-container>
  <!-- <form action="">
    <v-text-field
      variant="outlined"
      v-model="FormData.name"
      :error-messages="v$.name.$errors.map(e => e.$message)"
      :counter="10"
      label="Name"
      required
      @input="v$.name.$touch"
      @blur="v$.name.$touch"
    ></v-text-field>
    <v-text-field
      v-model="FormData.email"
      :error-messages="v$.email.$errors.map(e => e.$message)"
      :counter="10"
      label="Email"
      required
      @input="v$.email.$touch"
      @blur="v$.email.$touch"
    ></v-text-field>

    <v-select
      v-model="FormData.city"
      :items="xpedia"
      item-title="name"
      item-value="id"
      :error-messages="v$.city.$errors.map(e => e.$message)"
      label="City"
      required
      @change="v$.city.$touch"
      @blur="v$.city.$touch"
    ></v-select>
  </form> -->
</template>
<script setup>
import { reactive } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, email, helpers } from "@vuelidate/validators";
import { MY_STORE } from "../store/myStore";
import { storeToRefs } from "pinia";
const STORE = MY_STORE();
const { name, count, doubleCount } = storeToRefs(STORE);
const { Increment, Reset, Decrement } = STORE;
const formFields = {
  name: "",
  age: "",
  phone: "",
  gender: "",
  email: "",
  city: "",
};
const xpedia = [
  { name: "ali", id: 1 },
  { name: "piu", id: 2 },
];
//copy of the form fields in reactive state
const FormData = reactive({ ...formFields });
//initilisaton of field validation
const rules = {
  name: { required: helpers.withMessage("HELLO", required) },
  age: { required },
  phone: { required },
  gender: { required },
  email: {
    required: helpers.withMessage("This feild is required", required),
    email: helpers.withMessage("Invalid Email", email),
  },
  city: { required },
};
const v$ = useVuelidate(rules, FormData);
function clear() {
  v$.value.$reset();

  for (const [key, value] of Object.entries(initialState)) {
    state[key] = value;
  }
}
</script>

<style scoped>
.custom-background {
  color: #213555; /* Replace with your desired color code */
  background-color: #4f709c;
}
</style>
