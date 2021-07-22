import Vue from "vue";

// Se importan las vistas (views) para poder identificar las rutas 
// Tambien Vue 👆👆

import Router from "vue-router";
import Home from "@/views/Home";
import About from "@/views/About";
import Error from "@/views/Error";

Vue.use(Router);

export default new Router({
  mode: "history",

  // Se declara cada ruta especifica a la cual se requiere navegar
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "*",
      name: "Error",
      component: Error,
    },
  ],
});
