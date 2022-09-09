var numeroSecreto = parseInt(Math.random() * 11);
console.log(numeroSecreto);
var tentativas = 0;

function Chutar() {
  var chute = parseInt(document.getElementById("valor").value);
  var resultado = document.getElementById("resultado");

  if (tentativas < 3) {
    if (chute == numeroSecreto) {
      resultado.innerHTML = "Parabéns! Você acertou o número secreto!";
    } else if (chute > 10 || chute < 0) {
      resultado.innerHTML =
        "Ops! Número inválido! Digite um número entre 0 e 10 e tente novamente, mas você desperdiçou uma tentativa...";
      tentativas++;
    } else {
      tentativas += 1;
      if (numeroSecreto > chute) {
        resultado.innerHTML =
          "Você errou! O número secreto é maior do que o seu palpite... Tente novamente!";
      } else {
        resultado.innerHTML =
          "Você errou! O número secreto é menor do que o seu palpite... Tente novamente!";
      }
    }
  } else {
    resultado.innerHTML =
      "Ops! Parece que você já tentou 3 vezes. Suas tentativas se esgotaram... O número secreto era: " +
      numeroSecreto +
      ".";
  }
}