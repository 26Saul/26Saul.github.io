// Mostrar contenido al hacer clic en "Empezar"
const btnCarta = document.getElementById('btn-carta');
const resto = document.getElementById('resto-contenido');

if (btnCarta && resto) {
  btnCarta.addEventListener('click', function (e) {
    e.preventDefault();
    resto.style.display = 'block';
    resto.scrollIntoView({
      behavior: 'smooth'
    });
  });
}

// Nube de "¿Seguro que quieres pasar la vida conmigo?"
const btnPropuesta = document.getElementById('btn-propuesta');
const nube = document.getElementById('nube-confirmacion');
const btnSi = document.getElementById('nube-si');
const btnNo = document.getElementById('nube-no');

if (btnPropuesta && nube && btnSi && btnNo) {
  btnPropuesta.addEventListener('click', function (e) {
    e.preventDefault();
    nube.style.display = 'flex'; // mostramos la nube
  });

  // Si pulsa "No", cerramos la nube y cambiamos el texto final
  btnNo.addEventListener('click', function () {
    const tituloFinal = document.querySelector('#final h2');
    const parrafoFinal = document.querySelector('#final p');

    if (tituloFinal) {
      tituloFinal.textContent = 'Uy… has puesto que no 💔';
    }

    if (parrafoFinal) {
      parrafoFinal.textContent = 'Respuesta errónea (Error404), vuelve a rellenarlo.';
    }

    nube.style.display = 'none';
  });

  // Si pulsa "Sí", mostramos mensaje y cambiamos el texto final
  btnSi.addEventListener('click', function () {
    alert('Yo también quiero pasar la vida contigo 💖');

    const tituloFinal = document.querySelector('#final h2');
    const parrafoFinal = document.querySelector('#final p');

    if (tituloFinal) {
      tituloFinal.textContent = 'Entonces es un SÍ para siempre ❤️';
    }

    if (parrafoFinal) {
      parrafoFinal.textContent = 'Entonces es un SÍ para siempre, te quiero mucho ❤️';
    }

    nube.style.display = 'none';
  });
}

// Juego: adivina el número del 1 al 10
const secretNumber = Math.floor(Math.random() * 10) + 1;
const guessInput = document.getElementById('guess-input');
const guessBtn = document.getElementById('guess-btn');
const gameMessage = document.getElementById('game-message');

if (guessBtn && guessInput && gameMessage) {
  guessBtn.addEventListener('click', function () {
    const value = Number(guessInput.value);

    if (!value || value < 1 || value > 10) {
      gameMessage.textContent = 'Pon un número del 1 al 10, mi amor.';
      gameMessage.style.color = '#c0392b';
      return;
    }

    if (value === secretNumber) {
      gameMessage.textContent = '¡Has acertado! Te debo mínimo 10 besos 💋';
      gameMessage.style.color = '#27ae60';
    } else if (value < secretNumber) {
      gameMessage.textContent = 'Es un poquito más alto. Inténtalo otra vez ❤️';
      gameMessage.style.color = '#8e44ad';
    } else {
      gameMessage.textContent = 'Es un poquito más bajo. Inténtalo otra vez ❤️';
      gameMessage.style.color = '#8e44ad';
    }
  });
}

// Abrir / cerrar carta de San Valentín
const cartaBox = document.getElementById('carta-box');
const cartaToggle = document.getElementById('carta-toggle');

if (cartaBox && cartaToggle) {
  cartaToggle.addEventListener('click', function () {
    const abierta = cartaBox.classList.toggle('abierta');

    if (abierta) {
      cartaToggle.textContent = 'Cerrar carta 💌';
    } else {
      cartaToggle.textContent = 'Abrir carta 💌';
    }
  });
}

// Juego "Elige tu regalo sorpresa"
const btnOpcionA = document.getElementById("opcion-a");
const btnOpcionB = document.getElementById("opcion-b");
const textoRegalo = document.getElementById("texto-regalo");

let regaloElegido = false;

if (btnOpcionA && btnOpcionB && textoRegalo) {
  btnOpcionA.addEventListener("click", function () {
    if (regaloElegido) return; // ya ha elegido uno

    regaloElegido = true;
    textoRegalo.textContent = "Has elegido el Regalo Cachondo: Ui pillina que pensabas que había aqui dentro?. Te llevas unas flores de regalo. :)";
    btnOpcionB.style.display = "none"; // ocultamos la otra opción
  });

  btnOpcionB.addEventListener("click", function () {
    if (regaloElegido) return;

    regaloElegido = true;
    textoRegalo.textContent = "Has elegido el Regalo Bonito: Muy bien, yo tambien te quiero dar cosas bonitas como la persona que esta leyendo esto, por eso te vas a llevar unas flores de regalo y si usted lo desea algo más porque eres la persona mas BONITA que he visto en mi vida aunque no tengas maquillaje PRECIOSA, te quiere tu novio. :=) ";
    btnOpcionA.style.display = "none";
  });
}

// Juego 3 en raya contra bot
const boardElement = document.getElementById('tictactoe-board');
const statusElement = document.getElementById('ttt-status');
const resetButton = document.getElementById('ttt-reset');
const loveMessage = document.getElementById('love-message');
const cellButtons = document.querySelectorAll('.cell');

if (boardElement && statusElement && resetButton && loveMessage && cellButtons.length) {
  let board = ['', '', '', '', '', '', '', '', ''];
  let gameActive = true;

  const human = '❌';
  const bot = '⭕';

  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  function checkWinner(player) {
    return winPatterns.some(pattern => {
      return pattern.every(index => board[index] === player);
    });
  }

  function isDraw() {
    return board.every(cell => cell !== '');
  }

  function updateBoard() {
    cellButtons.forEach((button, index) => {
      button.textContent = board[index];
      button.disabled = board[index] !== '' || !gameActive;
    });
  }

  function finishGame(message, showSecret = false) {
    gameActive = false;
    statusElement.textContent = message;
    updateBoard();

    if (showSecret) {
      loveMessage.hidden = false;
    }
  }

  function botMove() {
    if (!gameActive) return;

    const emptyIndexes = board
      .map((value, index) => (value === '' ? index : null))
      .filter(index => index !== null);

    if (!emptyIndexes.length) return;

    const randomIndex = emptyIndexes[Math.floor(Math.random() * emptyIndexes.length)];
    board[randomIndex] = bot;

    if (checkWinner(bot)) {
      finishGame('Ay nooo, perdiste contra la IA ⭕. Pero te doy revancha, preciosa.');
      return;
    }

    if (isDraw()) {
      finishGame('Empate 💞. Eso significa que estamos igual de fuertes.');
      return;
    }

    statusElement.textContent = 'Tu turno, amor. Tú eres ❌';
    updateBoard();
  }

  cellButtons.forEach(button => {
    button.addEventListener('click', () => {
      const index = Number(button.dataset.cell);

      if (!gameActive || board[index] !== '') return;

      board[index] = human;
      updateBoard();

      if (checkWinner(human)) {
        finishGame('¡UIIIIIIIII Le ganaste a la IA mi princesa muy bien toma tu regalo ! ', true);
        return;
      }

      if (isDraw()) {
        finishGame('Empate 💞. Juega otra vez, mi princesa.');
        return;
      }

      statusElement.textContent = 'Pensando jugada del IA...';

      setTimeout(() => {
        botMove();
      }, 500);
    });
  });

  resetButton.addEventListener('click', () => {
    board = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    loveMessage.hidden = true;
    statusElement.textContent = 'Tu turno princesa. Tú eres ❌';
    updateBoard();
  });

  updateBoard();
}