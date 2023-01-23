//ator
let xAtor = 100;
let yAtor = 366;
let larguraAtor = 30;
let alturaAtor = 30;

let colisao = false;

function mostraAtor(){
   image(imagemDoAtor, xAtor, yAtor, larguraAtor, alturaAtor);
}

function movimentaAtor(){
    if (keyIsDown(UP_ARROW)){
        yAtor -= 3;
    }
    if (keyIsDown(DOWN_ARROW)){
        yAtor += 3;
    }
    if (keyIsDown(LEFT_ARROW)){
        xAtor -= 3;
    }
    if (keyIsDown(RIGHT_ARROW)){
        xAtor += 3;
    }
}

function verificaColisao(){
    for (let i = 0; i < imagemCarros.length; i = i + 1){
        colisao = collideRectCircle(xCarro[i], yCarro[i], larguraCarro, alturaCarro, xAtor, yAtor, larguraAtor - 10, alturaAtor - 10);
        if (colisao){
            colidiu();
        }
    }
}

function colidiu(){
    yAtor = 366;
}