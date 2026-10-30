// Mostrar contenido al hacer clic en "Empezar"
const btnCarta = document.getElementById('btn-carta');
const resto = document.getElementById('resto-contenido');

if (btnCarta && resto) {
    btnCarta.addEventListener('click', function () {
        resto.style.display = 'block';

        resto.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
}

// Nube de "¿Seguro que quieres pasar la vida conmigo?"
const btnPropuesta = document.getElementById('btn-propuesta');
const nube = document.getElementById('nube-confirmacion');
const btnSi = document.getElementById('nube-si');
const btnNo = document.getElementById('nube-no');

if (btnPropuesta && nube && btnSi && btnNo) {
    btnPropuesta.addEventListener('click', function () {
        nube.style.display = 'flex';
    });

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
const btnOpcionA = document.getElementById('opcion-a');
const btnOpcionB = document.getElementById('opcion-b');
const textoRegalo = document.getElementById('texto-regalo');

let regaloElegido = false;

if (btnOpcionA && btnOpcionB && textoRegalo) {
    btnOpcionA.addEventListener('click', function () {
        if (regaloElegido) return;

        regaloElegido = true;
        textoRegalo.textContent = 'Has elegido el Regalo Cachondo: Ui pillina que pensabas que había aqui dentro?. Te llevas unas flores de regalo. :)';
        btnOpcionB.style.display = 'none';
    });

    btnOpcionB.addEventListener('click', function () {
        if (regaloElegido) return;

        regaloElegido = true;
        textoRegalo.textContent = 'Has elegido el Regalo Bonito: Muy bien, yo tambien te quiero dar cosas bonitas como la persona que esta leyendo esto, por eso te vas a llevar unas flores de regalo y si usted lo desea algo más porque eres la persona mas BONITA que he visto en mi vida aunque no tengas maquillaje PRECIOSA, te quiere tu novio. :=)';
        btnOpcionA.style.display = 'none';
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
                finishGame('¡UIIIIIIIII Le ganaste a la IA mi princesa muy bien toma tu regalo!', true);
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

// =============================
// SORPRESA PRIMER AÑO
// =============================

const anniversaryLock = document.getElementById('anniversary-lock');
const anniversaryContent = document.getElementById('anniversary-content');
const anniversaryInput = document.getElementById('anniversary-password');
const anniversaryButton = document.getElementById('anniversary-unlock');
const anniversaryMessage = document.getElementById('anniversary-message');

const ANNIVERSARY_PASSWORDS = [
    'pingu',
    'PINGU',
    'Pingu',
    'te quiero'
];

function normalizeText(text) {
    return text
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .trim()
        .replace(/\s+/g, ' ');
}

if (
    anniversaryLock &&
    anniversaryContent &&
    anniversaryInput &&
    anniversaryButton &&
    anniversaryMessage
) {
    anniversaryInput.addEventListener('input', () => {
        anniversaryMessage.textContent = '';
        anniversaryMessage.className = 'anniversary-message';
    });

    anniversaryButton.addEventListener('click', () => {
        const introducedPassword = normalizeText(anniversaryInput.value);

        const isCorrect = ANNIVERSARY_PASSWORDS.some(password => {
            return normalizeText(password) === introducedPassword;
        });

        if (isCorrect) {
            anniversaryLock.hidden = true;
            anniversaryContent.hidden = false;

            anniversaryContent.scrollIntoView({
                behavior: 'smooth'
            });
        } else {
            anniversaryMessage.textContent = 'Contraseña incorrecta. Vuelve a intentarlo, mi amor.';
            anniversaryMessage.className = 'anniversary-message error';

            anniversaryInput.value = '';
            anniversaryInput.focus();
        }
    });

    anniversaryInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            anniversaryButton.click();
        }
    });
}