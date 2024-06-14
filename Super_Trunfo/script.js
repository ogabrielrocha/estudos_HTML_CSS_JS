var cartaRocha = {
  nome: "Homem de Ferro",
  imagem: "https://i.pinimg.com/originals/52/08/ac/5208ac301eb3fb378dc6b69a5e94c6ec.jpg",
  atributos:{
    ataque: 80,
    defesa: 60,
    magia:  90
  }//fim da declaração de atributos
}

var cartaLufe = {
  nome: "Alegria da Linguiça",
  atributos:{
    ataque: 84,
    defesa: 65,
    magia:  87
  }//fim da declaração de atributos
}

var cartaAxe = {
  nome: "Diogo Decente",
  atributos:{
    ataque: 1000,
    defesa: 1000,
    magia:  1000
  }//fim da declaração de atributos
}

var cartas = [cartaRocha, cartaLufe, cartaAxe]
var cartaComputador
var cartaJogador

//---------------------------------------------------------------------------------------

function sortearCarta(){
  var numeroCartaComputador = parseInt(Math.random() * 3)
  cartaComputador = cartas[numeroCartaComputador]
  //console.log(cartaComputador)
  var numeroCartaJogador = parseInt(Math.random() * 3)
  while (numeroCartaJogador == numeroCartaComputador){
    numeroCartaJogador = parseInt(Math.random() * 3)
  }// fim do while da função
  cartaJogador = cartas[numeroCartaJogador]
  //console.log(cartaJogador)
  document.getElementById('btnSortear').disabled = true
  document.getElementById('btnJogar').disabled = false
  exibirOpcoes()
} // fim da função sortear carta

//---------------------------------------------------------------------------------------

function exibirOpcoes() {
  var opcoes = document.getElementById('opcoes')
  var opcoesTexto = ''
  for(var atributo in cartaJogador.atributos){
    //console.log(atributo)
    opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo
  }//fim do for
  opcoes.innerHTML = opcoesTexto
}//fim da função exibir opções

// -------------------------------------------------------------------------------

function obtemAtributoSelecionado() {
  var radioAtributo = document.getElementsByName ('atributo')
  for(var i = 0; i < radioAtributo.length; i++) {
    if(radioAtributo[i].checked) {
      return radioAtributo[i].value
    }//fim do if
  }//Fim do for
}//fim da função

// ------------------------------------------------------------------------------------------------------------------------------------

function jogar(){
 var atributoSelecionado = obtemAtributoSelecionado()
 if (cartaJogador.atributos[atributoSelecionado] > cartaComputador.atributos[atributoSelecionado]){
   alert("Venceu o Computador")
 }else if (cartaJogador.atributos[atributoSelecionado] < cartaComputador.atributos[atributoSelecionado]){
   alert("O Computador venceu!")
 }else {
   alert ("Empatou!")
 }// fim dos if else
}//fim da função jogar

//-----------------------------------------------------------------------------------------------------------------------------------
