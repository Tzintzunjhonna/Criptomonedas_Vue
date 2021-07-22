<template>
  <div>
    <!-- Aqui traemos la vista de px-assets-table exportado debidamente-->
    <px-assets-table v-bind:assets="assets" />
  </div>
</template>

<script>
// Importamos tanto la api.js para utilizarlo en Views
// Importamos la exportación de PxAssetsTable para ocuparlo en views

import api from "@/api";
import PxAssetsTable from "@/components/PxAssetsTable";

export default {
  name: "Home",
  components: { PxAssetsTable },

  data() {
    return {
      assets: [],
    };
  },

  // Realizar un hook para interactuar con la api
  created() {
    api.getAssets().then((assets) => (this.assets = assets));
  },
};
</script>
