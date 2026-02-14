// Mostrar contenido al hacer clic en "Empezar"
const btnCarta = document.getElementById('btn-carta');
const resto = document.getElementById('resto-contenido');

btnCarta.addEventListener('click', function (e) {
  e.preventDefault();
  resto.style.display = 'block';
  resto.scrollIntoView({
    behavior: 'smooth'
  });
});

// Nube de "¿Seguro que quieres pasar la vida conmigo?"
const btnPropuesta = document.getElementById('btn-propuesta');
const nube = document.getElementById('nube-confirmacion');
const btnSi = document.getElementById('nube-si');
const btnNo = document.getElementById('nube-no');

btnPropuesta.addEventListener('click', function (e) {
  e.preventDefault();
  nube.style.display = 'flex'; // mostramos la nube
});

// Si pulsa "No", cerramos la nube
btnNo.addEventListener('click', function () {
  nube.style.display = 'none';
});

// Si pulsa "Sí", mostramos mensaje y cambiamos el texto final
btnSi.addEventListener('click', function () {
  alert('Yo también quiero pasar la vida contigo 💖');

  // Cambiar el texto del título final como detalle extra
  const tituloFinal = document.querySelector('#final h2');
  const parrafoFinal = document.querySelector('#final p');

  if (tituloFinal) {
    tituloFinal.textContent = 'Entonces es un SÍ para siempre ❤️';
  }
  if (parrafoFinal) {
    parrafoFinal.textContent = 'Entonces es un SÍ para siempre, te quiero mucho ❤️';
  }

  btnNo.addEventListener('click', function () {
    const tituloFinal = document.querySelector('#final h2');
    const parrafoFinal = document.querySelector('#final p');

    if (tituloFinal) {
      tituloFinal.textContent = 'Uy… has puesto que no 💔';
    }
    if (parrafoFinal) {
      parrafoFinal.textContent = 'Respues erronea(Error404), vuelvalo a rellenar.';
    }

    nube.style.display = 'none';
  });
  nube.style.display = 'none';
});

// Juego: adivina el número del 1 al 10
const secretNumber = Math.floor(Math.random() * 10) + 1;
const guessInput = document.getElementById('guess-input');
const guessBtn = document.getElementById('guess-btn');
const gameMessage = document.getElementById('game-message');

if (guessBtn) {
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
