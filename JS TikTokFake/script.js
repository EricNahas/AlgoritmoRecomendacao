let arrayPagina = [];
let tamanhoArrayPagina = arrayPagina.length;
let tamanhoAtual = 0;

document.onkeydown = function(e) {
  if (e.key === "ArrowDown") {

    document.getElementById("like").style.display = "flex";

    let titulo = document.getElementById("Titulo");

    if (tamanhoAtual < tamanhoArrayPagina) {
        tamanhoAtual++;

        titulo.innerHTML = retornaTextoTitulo(arrayPagina[tamanhoAtual - 1]);
    }

    else if (tamanhoAtual == tamanhoArrayPagina) {
        let post = criacao();
        tamanhoAtual++;
        arrayPagina.push(post);
        
        titulo.innerHTML = retornaTextoTitulo(post);

        tamanhoArrayPagina = arrayPagina.length;
        
    }
  }
  checaBotao(arrayPagina[tamanhoAtual - 1]);
};

document.onkeyup = function(e) {
  if (e.key === "ArrowUp") {

    if (tamanhoAtual > 1) {

        tamanhoAtual--;
        
        if (arrayPagina[tamanhoAtual - 1] !== undefined && arrayPagina[tamanhoAtual - 1] !== null) {
            let titulo = document.getElementById("Titulo");
            titulo.innerHTML = retornaTextoTitulo(arrayPagina[tamanhoAtual - 1]);
        }

    }
  }
  checaBotao(arrayPagina[tamanhoAtual - 1]);
};


retornaTextoTitulo = function(post) {
  return "Gênero: " + post["genero"] + " <br>Paisagem: " + post["paisagem"];
}

