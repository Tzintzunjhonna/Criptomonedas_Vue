import Vue from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css";
import { VueSpinners } from "@saeris/vue-spinners";
import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'


// Importamos las rutas de Router.js para poder validar las rutas
import router from "@/router";

// Importamos los filtros de filtter.js para poder utilizarlos en  PxAssetsTable
import { dollarFilter, percentFilter } from "@/filters";

// Se declaran las funciones de filter para exportarlas a las vistas de views
Vue.filter("dollar", dollarFilter);
Vue.filter("percent", percentFilter);

//Librerias para graficos
Vue.use(VueSpinners);
Vue.use(Chartkick.use(Chart))


Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
