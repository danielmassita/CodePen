function ConverterBRL() {
  var valorElemento = document.getElementById('valor');
  var valor = valorElemento.value //puxa o valor como string
  var valorEmDolarNumerico = parseFloat(valor); //string pra número 
  
  var valorEmReal = valorEmDolarNumerico * (5.25); //USD 06/09/2022
  var elementoValorConvertido = document.getElementById('valorConvertido'); //puxa o ID do html
  console.log(elementoValorConvertido); //mostra a linha toda do ID
  
  var valorConvertido = 'O resultado em Real (BRL) é de: R$ '+valorEmReal // a var vai usar um novo valor como string pra devolver pro html
  elementoValorConvertido.innerHTML = valorConvertido // adiciona o elemento na linha do html mas com o conteúdo do texto!  
}

function ConverterEUR() {
  var valorElemento = document.getElementById('valor');
  var valor = valorElemento.value //puxa o valor como string
  var valorEmDolarNumerico = parseFloat(valor); //string pra número 
  
  var valorEmEuro = valorEmDolarNumerico * (1.01); //USD 06/09/2022
  var elementoValorConvertido = document.getElementById('valorConvertido'); //puxa o ID do html
  console.log(elementoValorConvertido); //mostra a linha toda do ID
  
  var valorConvertido = 'O resultado em Euros (EUR) é de: € '+valorEmEuro // a var vai usar um novo valor como string pra devolver pro html
  elementoValorConvertido.innerHTML = valorConvertido // adiciona o elemento na linha do html mas com o conteúdo do texto!  
}

function ConverterJPY() {
  var valorElemento = document.getElementById('valor');
  var valor = valorElemento.value //puxa o valor como string
  var valorEmDolarNumerico = parseFloat(valor); //string pra número 
  
  var valorEmIene = valorEmDolarNumerico * (143.21); //USD 06/09/2022
  var elementoValorConvertido = document.getElementById('valorConvertido'); //puxa o ID do html
  console.log(elementoValorConvertido); //mostra a linha toda do ID
  
  var valorConvertido = 'O resultado em Ienes Japoneses (JPY) é de: ¥ '+valorEmIene // a var vai usar um novo valor como string pra devolver pro html
  elementoValorConvertido.innerHTML = valorConvertido // adiciona o elemento na linha do html mas com o conteúdo do texto!  
}

function ConverterBTC() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);
  
  var valorEmBitCoin = valorEmDolarNumerico * 0.000053;
  var elementoValorConvertido = document.getElementById('valorConvertido');
  var valorConvertido = 'O resultado em BitCoins (BTC) é de: ₿ '+valorEmBitCoin // a var vai usar um novo valor como string pra devolver pro html
  elementoValorConvertido.innerHTML = valorConvertido // adiciona o elemento na linha do html mas com o conteúdo do texto!  
}