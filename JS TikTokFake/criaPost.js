const arrayGenero = ["Ação", "Terror", "Drama", "Comédia", "Romance"];
const arrayPaisagem = ["Praia", "Casa", "Rua", "Hotel", "Parque"];

let [g1, g2, g3, g4, g5] = [1, 1, 1, 1, 1];
let [p1, p2, p3, p4, p5] = [1, 1, 1, 1, 1];

function getValues(a1, a2, a3, ...args) {
    let arrayEntrada = {0: a1, 1: a2, 2: a3}

    if (args != null) {
        let n = 2;

        for (let numbers of args) {
            n++;
            arrayEntrada[n] = numbers;
        }
    }

    let arrayRetorno = [];

    const min = 0;

    for (let i = 0; i < Object.keys(arrayEntrada).length; i++) {
        for (let j = 0; j < Object.values(arrayEntrada)[i]; j++) {
            arrayRetorno.push(i);
        }
    }
    console.log(arrayRetorno);
    console.log(arrayEntrada);

    const max = arrayRetorno.length;

    return arrayRetorno[Math.round(Math.random() * (max - 1))];
}



function criacao() {
    const min = 0;
    const max = 2;

    let arrayRetorno = { "genero": null, "paisagem": null , "like": false};
    arrayRetorno.genero = arrayGenero[getValues(g1, g2, g3, g4, g5)];
    arrayRetorno.paisagem = arrayPaisagem[getValues(p1, p2, p3, p4, p5)];

    return arrayRetorno;
}

function algoritmoLike(objeto) {
    
    if (objeto.like == false) {             // dá o like
        descobreObjeto(objeto, false);
        objeto.like = true;
    }
    else {                                  //tira o like
        objeto.like = false;
        descobreObjeto(objeto, true);
    }
    checaBotao(objeto);
}

function checaBotao (objeto) {
    if (objeto.like == false) {
        document.getElementById("img-btn").src = "like.png";
    }
    else {
        document.getElementById("img-btn").src = "dislike.png";
    }
}

function descobreObjeto(objeto, flag) {
    if (objeto.like == false) {
        switch (objeto.genero) {
            case "Ação":
                !flag ? g1++ : g1--;
                break;
            
            case "Terror":
                !flag ? g2++ : g2--;
                break;
    
            case "Drama":
                !flag ? g3++ : g3--;
                break;
    
        }
    
        switch (objeto.paisagem) {
            case "Praia":
                !flag ? p1++ : p1--;
                break;
            
            case "Casa":
                !flag ? p2++ : p2--;
                break;
    
            case "Rua":
                !flag ? p3++ : p3--;
                break;
        }
    }
}