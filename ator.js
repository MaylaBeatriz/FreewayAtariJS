//ator
let xAtor = 100;
let yAtor = 366;
let larguraAtor = 30;
let alturaAtor = 30;

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