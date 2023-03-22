/**
 * Obtener valor de una carta
 * @param {String} card
 * @returns {Number} retorna el valor de la carta
 */
export const getCardValue = (card) => {
  //indexA-indexB without b
  const value = card.substring(0, card.length - 1);
  //Evalua si no es un numero(Not a Number)/ * 1: convierte string a number
  return isNaN(value) ? (value === "A" ? 11 : 10) : value * 1;
};
