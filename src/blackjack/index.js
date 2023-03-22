import _ from "underscore";
import {
  createDeck,
  getCard,
  getCardValue,
  computerTurn,
  createCardHTML,
} from "./use-cases";

let deck = [];
const types = ["C", "D", "H", "S"];
const specials = ["A", "J", "Q", "K"];
let puntosJugadores = [];

//References to HTML
const puntosPantalla = document.querySelectorAll("small"),
  divCartasJugador = document.querySelectorAll(".divCartas");

const btnPedir = document.querySelector("#btnPedir"),
  btnDetener = document.querySelector("#btnDetener"),
  btnNuevo = document.querySelector("#btnNuevo");

const startGame = (numeroJugadores = 2) => {
  deck = createDeck(types, specials);
  puntosJugadores = [];

  //initialize puntosJugadores
  for (let i = 0; i < numeroJugadores; i++) {
    puntosJugadores.push(0);
  }

  puntosPantalla.forEach((element) => (element.innerText = 0));
  divCartasJugador.forEach((element) => (element.innerHTML = ""));

  btnPedir.disabled = false;
  btnDetener.disabled = false;
};

//Turno: 0 = primer jugador y el ultimo será la computadora
const accumulatePoints = (carta, turno) => {
  puntosJugadores[turno] = puntosJugadores[turno] + getCardValue(carta);
  puntosPantalla[turno].innerText = puntosJugadores[turno];
  return puntosJugadores[turno];
};

//verificar ganador-setTimeout: para dar tiempo a que se pinte la carta en el html y luego disparar la alerta
const gameState = () => {
  //desestructuracion
  const [puntosJugador, puntosComputadora] = puntosJugadores;
  setTimeout(() => {
    if (puntosComputadora === puntosJugador) {
      alert("NADIE GANA");
    } else if (puntosJugador > 21) {
      alert("Gana computadora");
    } else if (puntosComputadora > 21) {
      alert("Gana jugador");
    } else {
      alert("Gana computadora");
    }
  }, 100);
};

//Eventos-->callback:funciones que se pasan como argumento
btnPedir.addEventListener("click", () => {
  const carta = getCard(deck);
  const puntosJugador = accumulatePoints(carta, 0);

  const HTMLCard = createCardHTML(carta);
  divCartasJugador[0].append(HTMLCard);

  //validando puntosJugador
  if (puntosJugador > 21) {
    console.warn("¡Lo lamento, has perdido!");
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    computerTurn(
      puntosJugador,
      accumulatePoints,
      createCardHTML,
      gameState,
      puntosJugadores,
      divCartasJugador,
      deck
    );
  } else if (puntosJugador === 21) {
    console.warn("¡21, excelente!");
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    computerTurn(
      puntosJugador,
      accumulatePoints,
      createCardHTML,
      gameState,
      puntosJugadores,
      divCartasJugador,
      deck
    );
  }
});

btnDetener.addEventListener("click", () => {
  btnDetener.disabled = true;
  btnPedir.disabled = true;
  //los parametros los puedo hacer mas dinamico segun escale la cantidad de jugadores
  computerTurn(
    puntosJugadores[0],
    accumulatePoints,
    createCardHTML,
    gameState,
    puntosJugadores,
    divCartasJugador,
    deck
  );
});

btnNuevo.addEventListener("click", () => {
  startGame();
});
