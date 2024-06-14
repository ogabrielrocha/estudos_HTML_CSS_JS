var numeroSecreto = parseInt (Math.random() * 10)
var tentativas = 3

while (tentativas > 0) {
  
var chute = parseInt(prompt('Digite um número entre 0 e 10:'))

    if (numeroSecreto == chute){
      alert ("NATASHA, BUONASERA NATASHA! ACERTOOOOU!")
      break
    } else if (chute > numeroSecreto) {
      alert ("O NÚMERO SECRETO É MENOR, PENSA BEEEEEEEM")
    } else if (chute < numeroSecreto) {
      alert ("O NÚMERO SECRETO É MAIOR, PENSA BEEEEEEEM")
    }
    tentativas = tentativas - 1
}

if (chute != numeroSecreto) {
  alert("TU FOI BURRÃO. O NÚMERO ERA: " + numeroSecreto)
}
