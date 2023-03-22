/**
 * Obtiene una carta del deck
 * @param {Array<String>} deck es un arreglo de String
 * @returns {String} retorna una carta del deck
 */
export const getCard = (deck) => {
  if (!deck || deck.length === 0) {
    //show message if deck is empty and the function stop here
    throw new Error("No hay cartas disponibles");
  }
  return deck.shift();
};
