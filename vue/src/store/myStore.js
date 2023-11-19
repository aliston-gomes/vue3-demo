import { acceptHMRUpdate, defineStore } from "pinia";
import { computed, ref } from "vue";

//THE ACTUAL STORE
export const MY_STORE = defineStore("my_store", () => {
  const name = ref("Aliston Gomes");
  const count = ref(0);
  //INCREMENT
  function Increment() {
    if (count.value == "- -") {
      count.value = 0;
    } else {
      return (count.value += 1);
    }
  }
  //DECREMENT
  function Decrement() {
    if (count.value == "- -") {
      count.value = 0;
    } else {
      return count.value >= 1 && (count.value -= 1);
    }
  }
  const doubleCount = computed(() => {
    return count.value * 200;
  });
  //RESET
  const Reset = () => {
    return (count.value = "- -");
  };
  return { name, count, Increment, Decrement, Reset, doubleCount };
});

//RESPONSIBLE FOR THE CHANGES IN DEVELOPMENT 
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUser, import.meta.hot));
}
// COMPUTED ARE USED JUST TO GET THE VALUES THEY DONT CALCULATE AGAIN AND AGAIN THEY ONLY CALCULATE IF THE VALUE IS CHANGED
// THE EVALUATE AND RETURN BASED THE CACHED VALUE
