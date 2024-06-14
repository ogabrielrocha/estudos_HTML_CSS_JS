var primeiroValor = parseInt (prompt ('Digite o primeiro valor:')) 
var operacao = prompt ("Digite '/' para fazer uma divisão, '*' para multiplicação, '+' para soma e '-' para subtração: ")
var segundoValor  = parseInt (prompt ('Digite o segundo valor:'))

if (operacao == '/') {
var resultado     = primeiroValor / segundoValor
document.write ("<h2>" + primeiroValor + " / " + segundoValor + " = " + resultado + "</h2>")
}
  
 else if (operacao == '*') {
var resultado     = primeiroValor * segundoValor
document.write ("<h2>" + primeiroValor + " * " + segundoValor + " = " + resultado + "</h2>")
  }
  
else  if (operacao == '+') {
var resultado     = primeiroValor + segundoValor
document.write ("<h2>" + primeiroValor + " + " + segundoValor + " = " + resultado + "</h2>")
  }
  
else  if (operacao == '-') {
var resultado     = primeiroValor - segundoValor
document.write ("<h2>" + primeiroValor + " - " + segundoValor + " = " + resultado + "</h2>")
  }

else {
  document.write ('<h2> Opção inválida </h2>')
}
