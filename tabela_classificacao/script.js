var rocha = {
  nome    : "Rocha",
  vitorias: 0,
  empates : 0,
  derrotas: 0,
  pontos  : 0
} //Fim do objeto gabriel

var lufe = {
  nome    : "Luiz Fernando",
  vitorias: 0,
  empates : 0,
  derrotas: 0,
  pontos  : 0 
}// Fim do objeto lufe

var axe = {
  nome    : "Machado",
  vitorias: 0,
  empates : 0,
  derrotas: 0,
  pontos  : 0 
}// Fim do objeto axe

var pat = {
  nome    : "Patrick",
  vitorias: 0,
  empates : 0,
  derrotas: 0,
  pontos  : 0 
}// Fim do objeto pat

//--------------------------------------------------------------------

lufe.pontos  = calculaPontos(lufe)
rocha.pontos = calculaPontos(rocha)
axe.pontos   = calculaPontos(axe)
pat.pontos   = calculaPontos(pat)

function calculaPontos(jogador){ 
  var pontos = (jogador.vitorias * 3) + jogador.empates
  return pontos
}// fim da função calculaPontos

var jogadores = [rocha, lufe, axe, pat]

// --------------------------------------------------------------

exibirJogadoresNaTela(jogadores)

function exibirJogadoresNaTela(jogadores){
  var html = ""
  for (var i = 0; i< jogadores.length; i++){
    html += "<tr><td>" + jogadores[i].nome     + "</td>"
    html += "<td>"     + jogadores[i].vitorias + "</td>"
    html += "<td>"     + jogadores[i].empates  + "</td>"
    html += "<td>"     + jogadores[i].derrotas + "</td>"
    html += "<td>"     + jogadores[i].pontos   + "</td>"
    html += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
    html += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
    html += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>"
    //html += "<td><button onClick='limparDados(" + i + ")'>Limpar dados</button></td></tr>"
  }//fim do for
    html += "<tr></td>"
    html += "<td>-</td>"
    html += "<td><button onClick='vitoriaGeral()'>Vitória Geral</button></td>"
    html += "<td><button onClick='empateGeral()'>Empate Geral</button></td>"
    html += "<td><button onClick='derrotaGeral()'>Derrota Geral</button></td>"
    html += "<td>-</td>"
    html += "<td>-</td>"
    html += "<td>-</td>"
    html += "<td><button onClick='limparTabela()'>Limpar Tabela</button></tr>"
  var tabelaJogadores = document.getElementById ('tabelaJogadores')
  tabelaJogadores.innerHTML = html
}//Fim da função exibir jogadores na tela

//----------------------------------------------------------------------

function vitoriaGeral (){
  for (j = 0; j < jogadores.length; j++){
  var jogador = jogadores[j]
  jogadores[j].vitorias++
  jogadores[j].pontos = calculaPontos(jogador)
  } // fim do for j
  exibirJogadoresNaTela (jogadores)
}//Fim da função de vitoria geral


//----------------------------------------------------------------------

function empateGeral (){
  for (j = 0; j < jogadores.length; j++){
  var jogador = jogadores[j]
  jogadores[j].empates++ 
  jogadores[j].pontos = calculaPontos(jogador)
  } // fim do for j
  exibirJogadoresNaTela (jogadores)
}//Fim da função de empate geral


//----------------------------------------------------------------------

function derrotaGeral (){
  for (j = 0; j < jogadores.length; j++){
  jogadores[j].derrotas++ 
  } // fim do for j
  exibirJogadoresNaTela (jogadores)
}//Fim da função de derrota geral


//----------------------------------------------------------------------

function limparTabela (){
  for (j = 0; j < jogadores.length; j++){
  jogadores[j].vitorias = 0
  jogadores[j].empates  = 0
  jogadores[j].derrotas = 0
  jogadores[j].pontos   = 0
  } // fim do for j
  exibirJogadoresNaTela (jogadores)
}//Fim da função de limpar tabela

//----------------------------------------------------------------------

function limparDados (i){
  var jogador = jogadores[i]
  jogador.vitorias = 0
  jogador.empates  = 0
  jogador.derrotas = 0
  jogador.pontos   = 0
  exibirJogadoresNaTela (jogadores)
}//Fim da função de limpar dados

//-----------------------------------------------------------------------------------------
  
function adicionarVitoria (i){
  var jogador = jogadores[i]
  jogador.vitorias++
  jogador.pontos = calculaPontos(jogador)
  exibirJogadoresNaTela (jogadores)
}//Fim da função de adicionar vitória
  
//-------------------------------------------------------------------------------------------  
  
  function adicionarEmpate (i){
    var jogador = jogadores [i]
    jogador.empates++
    jogador.pontos = calculaPontos(jogador)
    exibirJogadoresNaTela(jogadores)
}//Fim da função de adicionar empate
  
 //-------------------------------------------------------------------------------------------  
  
  function adicionarDerrota (i){
   var jogador = jogadores[i]
   jogador.derrotas++
   jogador.pontos = calculaPontos(jogador)
    exibirJogadoresNaTela(jogadores)
}//Fim da função de adicionar derrota
