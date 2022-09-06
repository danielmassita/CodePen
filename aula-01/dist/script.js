/*
var nome = "Daniel"
console.log("Bem-vindo, " + nome + ". Essa é a Calculadora de Média!")

var notaDoPrimeiroBimestre = 9.4335
var notaDoSegundoBimestre = 7.234
var notaDoTerceiroBimestre = 4.234
var notaDoQuartoBimestre = 2.183

var notaFinal = (notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre)/4
var notaFixada = notaFinal.toFixed(1)

console.log(notaFixada)
console.log("A média da sua Nota Final é: " +notaFixada)
*/

var nota1 = 10
var nota2 = 7
var nota3 = 8
var nota4 = 9

var media = (nota1+nota2+nota3+nota4)/4
console.log(media.toFixed(1))

function calcularMedia() {
  var nota1 = parseFloat(document.getElementById("nota1").value);
  var nota2 = parseFloat(document.getElementById("nota2").value);
  var nota3 = parseFloat(document.getElementById("nota3").value);
  var nota4 = parseFloat(document.getElementById("nota4").value);

  var media = (nota1+nota2+nota3+nota4)/4
  var mediaFixada = media.toFixed(2)
  console.log(media)
  
  var resultadoNaTela = document.getElementById("resultadoMedia")
  
  
  if (mediaFixada >= 6) {
    resultadoMedia.innerHTML = "A média da sua nota final foi " + mediaFixada + ". Parabéns, com essa nota você foi APROVADA(O)!" 
  } else {
    resultadoMedia.innerHTML = "A média da sua nota final foi " + mediaFixada + ". Infelizmente, com essa nota você foi REPROVADO(A)!"
  }
}