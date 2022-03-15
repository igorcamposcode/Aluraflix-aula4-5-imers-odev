
// Funções Adicionar filme

function adicionarFilme() {

    // Essas variável irá mostrar na página o seguinte erro! "Você inseriu a URL inválida..."
    var elementoResultadoErro = document.getElementById("resultadoErro");

    var filmeFavorito = document.getElementById("filme").value;

    // Se , filmeFavorito terminar com ("jpg"). A imagem não será execultada!

      if (filmeFavorito.endsWith (".jpg")) {
        listarFilmesEmTela( filmeFavorito );
      } else {
          console.error("Você inseriu a URL inválida...")
          elementoResultadoErro.innerHTML = "Você inseriu a URL inválida... ";
      }
    document.getElementById("filme").value = "";  
}

function listarFilmesEmTela(filme){

         // Essa variável Elemento Filme, Irá acrescentar uma imegem de algum filme fávorito seu.
         var elementoFilme =("<img src= " +  filme  +  ">");
         var elementoListaFilme = document.getElementById("listaFilme");
    elementoListaFilme.innerHTML =  elementoListaFilme.innerHTML + elementoFilme 
}

// pra verem a resultado da aula 4 bastem acessar: (https://codepen.io/igorcamposcode/pen/vYpBRbp); Teve uma leve mudança no backgroud.