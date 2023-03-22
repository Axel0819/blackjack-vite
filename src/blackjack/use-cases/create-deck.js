import _ from "underscore";

/**
 * Crea un nuevo deck de cartas
 * @param {Array<String>} typesOfCards Ejemplo:["C", "D", "H", "S"]
 * @param {Array<String>} specialTypes Ejemplo:["A", "J", "Q", "K"]
 * @returns {Array<String>} retorna el nuevo deck de cartas
 */
export const createDeck = (typesOfCards, specialTypes) => {
  if (!typesOfCards || typesOfCards.length === 0)
    throw new Error("tiposDeCarta es obligatorio como un arreglo de string");

  if (!specialTypes || specialTypes.length === 0)
    throw new Error("tiposEspeciales es obligatorio como un arreglo de string");

  let deck = [];

  for (let i = 2; i <= 10; i++) {
    for (let tipo of typesOfCards) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of typesOfCards) {
    for (let esp of specialTypes) {
      deck.push(esp + tipo);
    }
  }
  //console.log(deck);
  deck = _.shuffle(deck);

  return deck;
};
