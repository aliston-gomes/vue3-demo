import { acceptHMRUpdate, defineStore } from "pinia";
import { computed, reactive, ref } from "vue";
import axios from "axios";
//THE ACTUAL STORE
export const MY_STORE = defineStore("my_store", () => {
  const name = ref("Aliston Gomes");
  const x = ref(89);
  const count = ref(0);
  const apiURL = ref("https://fakestoreapi.com/products");
  const Products = reactive([]);
  const person = ref({ name: "aliston", age: "24" });
  function update() {
    Products = "hello";
  }

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

  //GET STATE DAIA INTO UI FILE
  const get_products_data = computed(() => {
    return Products;
  });
  //RESET
  const Reset = () => {
    return (count.value = "- -");
  };
  //API
  async function GetProducts() {
    try {
      const response = await axios.get(apiURL.value);
      Products.push(...response.data);
      console.log(response.data, "API RESPONSE DATA ");
    } catch (error) {
      console.log(error);
    }
  }
  //GETING PERSON OBJECT IN VUE FILE
  const get_person_data = computed(() => {
    return person.value;
  });
  //RESETING THE STATE
  function $reset() {
    count.value = 0;
  }
  //PATCHIING THE STATE
  const $patch = () => {
    person.value.name = "hello world";
    count.value = 1009;
    console.log(person);
  };

  return {
    name,
    count,
    Increment,
    Decrement,
    Reset,
    doubleCount,
    GetProducts,
    get_products_data,
    update,
    $reset,
    $patch,
    get_person_data,
    person,
  };
});

//RESPONSIBLE FOR THE CHANGES IN DEVELOPMENT
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(MY_STORE, import.meta.hot));
}
// COMPUTED ARE USED JUST TO GET THE VALUES THEY DONT CALCULATE AGAIN AND AGAIN THEY ONLY CALCULATE IF THE VALUE IS CHANGED
// THE EVALUATE AND RETURN BASED THE CACHED VALUE
