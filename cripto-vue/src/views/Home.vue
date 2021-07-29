<template>
  <div>
    <!--Es para ver cargar el circulo-->
    <bounce-loader :loading="isLoading" :color="'#68d391'" :size="100" />
    <!-- Aqui traemos la vista de px-assets-table exportado debidamente-->
    <px-assets-table v-if="!isLoading" :assets="assets" />
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
      isLoading: false,
      assets: [],
    };
  },

  // Realizar un hook para interactuar con la api
  created() {
    (this.isLoading = true),
      api
        .getAssets()
        .then((assets) => (this.assets = assets))
        .finally(() => (this.isLoading = false));
  },
};
</script>
