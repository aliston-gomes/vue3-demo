import { createApp } from "vue";
import { createPinia } from "pinia";
const pinia = createPinia();
// import "./style.css";
import "vuetify/styles";
import App from "./App.vue";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
function SecretPiniaPlugin() {
  return { secret: "the cake is a lie" };
}
const vuetify = createVuetify({
  components,
  directives,
});
createApp(App).use(vuetify).use(pinia).mount("#app");
// import GlobalComponent from "./components/GlobalComponent.vue";
// const app = createApp(App);
// app.component("GlobalComponent", GlobalComponent);
// app.mount("#app");
