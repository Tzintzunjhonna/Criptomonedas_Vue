import Vue from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css";

// Importamos las rutas de Router.js para poder validar las rutas
import router from "@/router";

// Importamos los filtros de filtter.js para poder utilizarlos en  PxAssetsTable
import { dollarFilter, percentFilter } from "@/filters";

// Se declaran las funciones de filter para exportarlas a las vistas de views
Vue.filter("dollar", dollarFilter);
Vue.filter("percent", percentFilter);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
