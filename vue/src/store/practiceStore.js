import axios from "axios";
import { acceptHMRUpdate, defineStore } from "pinia";
import { computed, reactive, ref } from "vue";

export const practiceStore = defineStore("practice", () => {
  //=============================STATES============================================================
  const user_name = ref("Super User");
  const user_credentials = reactive({ id: "X23-P", pass: "test@123" });
  const cities = ref([]);
  //=============================GETTERS============================================================
  const get_user_information = computed({
    get() {
      return user_name.value;
    },
    set(new_value) {
      user_name.value = new_value;
    },
  });
  const get_userName = computed(() => {
    return user_name.value;
  });

  //=============================ACTIONS============================================================
  const get_cities = async () => {
    const response = await axios.get(
      "https://countriesnow.space/api/v0.1/countries/population"
    );
    cities.value = response.data.data;
  };
  return {
    user_name,
    user_credentials,
    cities,
    get_user_information,
    get_cities,
    get_userName,
  };
});
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(practiceStore, import.meta.hot));
}
