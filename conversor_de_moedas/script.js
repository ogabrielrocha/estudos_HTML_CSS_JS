var valorDolarTexto = prompt ("Qual o valor em dolar que você quer converter?")

var valorDolarNumero = parseFloat (valorDolarTexto)

alert(valorDolarNumero)

var valorReal = valorDolarNumero * 5.50 
var valorRealDecimal = valorReal.toFixed(2)

alert (valorRealDecimal)
