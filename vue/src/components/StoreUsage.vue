<template>
  <v-container>
    <!-- <v-btn v-on:click="get_country">Get Countries</v-btn> -->
    <!-- {{ get_user_information }} -->
    <!-- <v-btn @click="fullName">Get Full Name</v-btn> -->
    <!-- {{ get_user_information }} -->
    <v-btn
      :class="{ active: active_class, inactive: inactive_class }"
      @click="change_class"
      >Chnage Class</v-btn
    >
    <!-- <v-card v-for="(city, index) in cities" :key="index">
      <div>{{ city.country }}</div>
    </v-card> -->
    <input
      placeholder="Enter New Name"
      type="text"
      @change="
        e => {
          console.log(e.target.value);
          update_user_name(e.target.value);
        }
      "
    />
  </v-container>
</template>
<script setup>
import { storeToRefs } from "pinia";
import { computed, onBeforeMount, reactive, ref } from "vue";
import { practiceStore } from "../store/practiceStore";
const STORE = practiceStore();
const { get_user_information, cities, get_userName } = storeToRefs(STORE);
console.log(get_user_information);
const { get_cities } = STORE;
onBeforeMount(() => {
  get_cities();
});

//DYNACMIC STYLE BINDINGS
const active_class = ref(true);
const inactive_class = ref(false);
const change_class = () => {
  console.log(active_class.value);
  console.log(inactive_class.value);
  active_class.value = !active_class.value;
  inactive_class.value = !inactive_class.value;
};
const update_user_name = name => {
  get_user_information.value = name;
};

const firstName = ref("John");
const lastName = ref("Doe");

const fullName = computed({
  // getter
  get() {
    return firstName.value + " " + lastName.value;
  },
  // setter
  set(newValue) {
    // Note: we are using destructuring assignment syntax here.
    [firstName.value, lastName.value] = newValue.split(" ");
  },
});

const form_feilds = {
  name: "",
};
const FormData = reactive({ ...form_feilds });
</script>
<style scoped>
.active {
  background: cornflowerblue;
}
.inactive {
  background: crimson;
}
</style>
