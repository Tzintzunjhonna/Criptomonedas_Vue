// Definir dentro de una variable la url de la Api

const url = "https://api.coincap.io/v2";

// Definir funciones para interactuar con la Api

function getAssets() {
  // Realizar una conquetenacion para la Api
  return fetch(`${url}/assets?limit=20`)
    .then((res) => res.json())
    .then((res) => res.data);
}

// Funcion para acceder a la moneda o el nombre en particular para url
function getAsset(coin) {
  return fetch(`${url}/assets/${coin}`)
    .then((res) => res.json())
    .then((res) => res.data);
}

// Funcio para acceder al historial de la criptomoneda

function getAssetHistory(coin) {
  const now = new Date();
  const end = now.getTime();
  now.setDate(now.getDate() - 1);
  const start = now.getTime();
  return fetch(
    `${url}/assets/${coin}/history?interval=h1&start=${start}&end=${end}`
  )
    .then((res) => res.json())
    .then((res) => res.data);
}

// Exportar lo optenido de getAssets para ocupar en
export default {
  getAssets,
  getAsset,
  getAssetHistory,
};
