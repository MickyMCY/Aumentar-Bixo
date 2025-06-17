let tempoRestante = 10 * 60; // 10 minutos

function atualizarContador() {
  const contador = document.getElementById("contador");
  const minutos = String(Math.floor(tempoRestante / 60)).padStart(2, '0');
  const segundos = String(tempoRestante % 60).padStart(2, '0');
  contador.innerText = ${minutos}:${segundos};
  if (tempoRestante > 0) {
    tempoRestante--;
  }
}

setInterval(atualizarContador, 1000);
