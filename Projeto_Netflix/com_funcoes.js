function adicionarFilme() {
 var campoFilmeFavorito = document.querySelector ('#filme')
 var filmeFavorito = campoFilmeFavorito.value
 if (filmeFavorito.endsWith('.jpg')) {
    listaFilmesNaTela (filmeFavorito)
}//Fim do if 
   else {
     alert ("imagem inválida")
}//Fim do else
  campoFilmeFavorito.value = ""
}//Fim da função adicionarFilmes


function listaFilmesNaTela (filme){
  var listaFilmes = document.querySelector ('#listaFilmes')
  var elementoFilme = "<img src=" + filme + ">"
  listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
}// Fim da função ListaFilmesNaTela
