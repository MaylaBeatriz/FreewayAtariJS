let somDaTrilha;
let somDaColisao;
let somDoPonto;

let imagemDaEstrada;
let imagemDoAtor;
let imagemCarros;
let imagemDoCarro1;
let imagemDoCarro2;
let imagemDoCarro3;

function preload() {
    somDaTrilha = loadSound("material/trilha.mp3");
    somDaColisao = loadSound("material/colidiu.mp3");
    somDoPonto = loadSound("material/pontos.wav");

    imagemDaEstrada = loadImage("material/estrada.png");
    imagemDoAtor = loadImage("material/ator-1.png");
    imagemDoCarro1 = loadImage("material/carro-1.png");
    imagemDoCarro2 = loadImage("material/carro-2.png");
    imagemDoCarro3 = loadImage("material/carro-3.png");
    imagemCarros = [imagemDoCarro1, imagemDoCarro2, imagemDoCarro3, imagemDoCarro1, imagemDoCarro2, imagemDoCarro3];
}  