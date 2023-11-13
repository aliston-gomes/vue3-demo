<template>
  <section>
    <div v-bind:id="idx">binding id using v-bind directive</div>
    <a :href="url" :id="anchor_id"
      >Binding Multiple attributes using v-bind directive</a
    >
    <hr />
    <a v-bind="binding_Object"
      >Binding Multiple attributes Binding using v-bind directive and Object</a
    >
    <div :[idy]="`dynamic - attribute - name`">
      Dynamic attribute name as dynamic but value as static
    </div>
    <div>
      <button :disabled="diable_button">
        Button with dynamic Disabled attribute
      </button>
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue";
const url = ref("photos-by-aliston-gomes.vercel.app");
const anchor_id = ref("anchor-link");
const binding_Object = {
  class: anchor_id,
  href: "photos-by-aliston-gomes.vercel.app",
};
const idy = "id";
const idx = ref("main-container");
const diable_button = false;
</script>
<style scoped></style>

<!-- //!NOTE -->
<!-- if the id provided by v-bind attribute is null  or undefined then it will be removed form the
element for which it was used -->

<!-- to dynamically add an object as an v-bind attribuute then we need to  declare an object with the attrubutes as the keys and values as the values of the attribues  -->

<!-- if in case we need to add dynamic attributes but values are static then we can make use of array structure type of structure in attrubutes to make this possible -->

<!-- button with disabled attribute will consider as true if the value provide to it is true, empty string or any other values and false if the value provided is false -->
