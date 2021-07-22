// Definir dentro de una variable la url de la Api

const url = "https://api.coincap.io/v2";

// Definir funciones para interactuar con la Api

function getAssets() {
  // Realizar una conquetenacion para la Api
  return fetch(`${url}/assets?limit=20`)
    .then((res) => res.json()) 
    .then((res) => res.data);
}

// Exportar lo optenido de getAssets para ocupar en 
export default {
  getAssets,
};
