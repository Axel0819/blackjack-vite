import { getCard } from "./";
/**
 * Turno de la computadora
 * @param {Number} puntosMinimos puntos mínimos para que la computadora pueda ganar
 * @param {Function} accumulatePoints función para los puntos acumulados de los jugadores
 * @param {Function} createCardHTML función para crear el HTML de la carta
 * @param {Function} gameState función para saber el estado del juego
 * @param {Array<Number>} puntosJugadores arreglo Number con los jugadores
 * @param {HTMLElement} divCartas elemento HTML que contiene las cartas
 * @param {Array<String>} deck
 */
export const computerTurn = (
  puntosMinimos,
  accumulatePoints,
  createCardHTML,
  gameState,
  puntosJugadores,
  divCartas,
  deck = []
) => {
  let puntosComputadora = 0;

  do {
    const carta = getCard(deck);
    const HTMLCard = createCardHTML(carta);
    
    divCartas[puntosJugadores.length - 1].append(HTMLCard);
    puntosComputadora = accumulatePoints(carta, puntosJugadores.length - 1);
  } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);
  gameState();
};
