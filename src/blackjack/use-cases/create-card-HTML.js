/**
 * Crear HTML de una carta
 * @param {String} carta carta a renderizar
 * @returns {HTMLImageElement} retorna el HTML de la carta
 */
export const createCardHTML = (carta) => {
  const imgCarta = document.createElement("img");
  imgCarta.src = `./assets/cartas/${carta}.png`;
  imgCarta.classList.add("carta");

  return imgCarta;
};
