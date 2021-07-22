// Importamos numeral para poder hacer operaciones con los valores de la Api
import numeral from "numeral";

// Definimos para hacer un filtro de los valores de dolares
const dollarFilter = function (value) {
  if (!value) {
    return "$ 0";
  }
  // Verificamos como se requiere la salida del filtro de dolares
  return numeral(value).format("($ 0.00a)");
};

// Definimos para hacer un filtro de Porcentaje
const percentFilter = function (value) {
  if (!value) {
    return "0%";
  }
  // Verificamos como se requiere la salida del filtro del porcentaje
  return `${Number(value).toFixed(2)}%`;
};

// exportamos las funciones para poder usarlas en main.js y despues en views
export { dollarFilter, percentFilter };
