var toscana = {
  nome: "Linguiça toscana",
  imagem: "https://s.cornershopapp.com/product-images/3030589.png?versionId=47gih.34uuZa0GztYWrdHxH.AvIKAZRl",
  atributos:{
    Suculência: 80,
    Crocância:  60,
    Defumação:  90
  }//fim da declaração de atributos
}

var alegria = {
  nome: "Alegria da Linguiça",
  imagem: "https://i.ytimg.com/vi/Ge4YD2WM2Mg/hqdefault.jpg",
  atributos:{
    Suculência: 52,
    Crocância:  45,
    Defumação:  12
  }//fim da declaração de atributos
}

var truta = {
  nome: "linguiça de truta",
  imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSotO-4A_VkU8tsxwZP0yHihvrHsMPUkuVs1foVKJRz4qFmNSmtdjB3TsVnwbIW31Lusn4&usqp=CAU",
  atributos:{
    Suculência: 52,
    Crocância:  96,
    Defumação:  10
  }//fim da declaração de atributos
}

var calabresa = {
  nome: "linguiça calabresa",
  imagem: "https://upload.wikimedia.org/wikipedia/commons/2/25/Lingui%C3%A7acalabresa.png",
  atributos:{
    Suculência: 54,
    Crocância:  18,
    Defumação:  14
  }//fim da declaração de atributos
}

var frango = {
  nome: "linguiça de frango",
  imagem: "https://www.receiteria.com.br/wp-content/uploads/receitas-de-linguica-de-frango-2.jpg",
  atributos:{
    Suculência: 1,
    Crocância:  2,
    Defumação:  12
  }//fim da declaração de atributos
}

var birro = {
  nome: "teu birrinho de bola",
  imagem: "https://images-americanas.b2w.io/produtos/01/00/img/2059130/1/2059130150_1GG.jpg",
  atributos:{
    Suculência: 1,
    Crocância:  2,
    Defumação:  1
  }//fim da declaração de atributos
}

var defumada = {
  nome: "linguiça defumada",
  imagem: "https://previews.123rf.com/images/anamariategzes/anamariategzes1701/anamariategzes170100005/68542814-fila-de-ling%C3%BCi%C3%A7a-de-porco-fumado-em-tripas-naturais-pendurado-em-um-poste-de-madeira-para-secar.jpg",
  atributos:{
    Suculência: 1,
    Crocância:  2,
    Defumação:  10000
  }//fim da declaração de atributos
}

var superTrunfo = {
  nome: "diego decente - o trufinha",
  imagem: "https://i.ytimg.com/vi/VxOagNL-kCg/maxresdefault.jpg",
  atributos:{
    Suculência: 1000000,
    Crocância:  1000000,
    Defumação:  1000000
  }//fim da declaração de atributos
}

//----------------------------------------------------------------------------------------------------

var cartas = [toscana, alegria, superTrunfo, calabresa, frango, truta, birro, defumada]
var cartaComputador
var cartaJogador

//---------------------------------------------------------------------------------------

function sortearCarta(){
  var numeroCartaComputador = parseInt(Math.random() * 8)
  cartaComputador = cartas[numeroCartaComputador]
  //console.log(cartaComputador)
  var numeroCartaJogador = parseInt(Math.random() * 8)
  while (numeroCartaJogador == numeroCartaComputador){
    numeroCartaJogador = parseInt(Math.random() * 8)
  }// fim do while da função
  cartaJogador = cartas[numeroCartaJogador]
  //console.log(cartaJogador)
  document.getElementById('btnSortear').disabled = true
  document.getElementById('btnJogar').disabled = false
  
  exibeCartaJogador()
} // fim da função sortear carta

//---------------------------------------------------------------------------------------

function exibeCartaJogador(){
  var divCartaJogador = document.getElementById("carta-jogador")
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">' ;
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
  var opcoesTexto = ""
  
   for(var atributo in cartaJogador.atributos){
    //console.log(atributo)
    opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
  }//fim do for
  var html = "<div id='opcoes' class='carta-status'>"
  
  divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
  
}//fim da função de exibir carta

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
  var divResultado = document.getElementById("resultado")
 var atributoSelecionado = obtemAtributoSelecionado()
 
 if (cartaJogador == cartas[2]){
   htmlResultado = '<p class="resultado-final">VOCE LAMBROU O PC NA PORRADA USANDO O SUPER TRUNFINHA!</p>'
 }else if (cartaComputador == cartas[2]){
   htmlResultado = '<p class="resultado-final">O SUPER TRUNFINHA LAMBROU-LHE NA PORRADA!</p>'
 }else if (cartaJogador.atributos[atributoSelecionado] > cartaComputador.atributos[atributoSelecionado]){
   htmlResultado = '<p class="resultado-final">LINGUIÇOU!</p>'
 }else if (cartaJogador.atributos[atributoSelecionado] < cartaComputador.atributos[atributoSelecionado]){
   htmlResultado = '<p class="resultado-final">O PC LINGUIÇOU!</p>'
 }else {
   htmlResultado = '<p class="resultado-final">LINGUiÇA TOSCANA É IGUAL A CALABRESA!</p>'
 }// fim dos if else
  
  divResultado.innerHTML = htmlResultado
  exibeCartaComputador() 
}//fim da função jogar

//--------------------------------------------------------------------------------------------------------------------------------

function exibeCartaComputador(){
  var divCartaMaquina = document.getElementById("carta-maquina")
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">' ;
  divCartaMaquina.style.backgroundImage = `url(${cartaComputador.imagem})`
  var nome = `<p class="carta-subtitle">${cartaComputador.nome}</p>`
  var opcoesTexto = ""
  
   for(var atributo in cartaComputador.atributos){
    //console.log(atributo)
    opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaComputador.atributos[atributo] + "<br>"
  }//fim do for
  var html = "<div id='opcoes' class='carta-status'>"
  
  divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
  
}// fim da função de exibir carta do computador
