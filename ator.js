//ator
let xAtor = 100;
let yAtor = 366;
let larguraAtor = 30;
let alturaAtor = 30;

//colisao
let colisao = false;

//pontos
let meusPontos = 0;

function mostraAtor(){
   image(imagemDoAtor, xAtor, yAtor, larguraAtor, alturaAtor);
}

function movimentaAtor(){
    if (keyIsDown(UP_ARROW)){
        yAtor -= 3;
    }
    if (keyIsDown(DOWN_ARROW)){
        if (podeSeMover()){
            yAtor += 3;
        }
    }
    if (keyIsDown(LEFT_ARROW)){
        xAtor -= 3;
    }
    if (keyIsDown(RIGHT_ARROW)){
        xAtor += 3;
    }
}

function verificaColisao(){
    for (let i = 0; i < imagemCarros.length; i++){
        colisao = collideRectCircle(xCarro[i], yCarro[i], larguraCarro, alturaCarro, xAtor, yAtor, larguraAtor - 15, alturaAtor - 15);
        if (colisao){
            voltaAtorPosicaoInicial();
            if (pontosMaiorQueZero()) {
                somDaColisao.play();
                meusPontos -= 1;
            }
        }
    }
}

function voltaAtorPosicaoInicial(){
    yAtor = 366;
}

function incluiPonto(){
    textAlign(CENTER);
    textSize(25);
    fill(color(255, 240, 60));
    text(meusPontos, width / 5, 27);
}

function marcaPonto() {
    if (yAtor < 15){
        meusPontos += 1;
        voltaAtorPosicaoInicial();
    }
}

function pontosMaiorQueZero() {
    return meusPontos > 0;
}

function podeSeMover() {
    return yAtor < 366;
}