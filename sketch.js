let imagemDaEstrada;
let imagemDoAtor;
let imagemDoCarro;

//ator
let xAtor = 100;
let yAtor = 366;
let larguraAtor = 30;
let alturaAtor = 30;

//carro
let xCarro = 400;
let yCarro = 40;
let larguraCarro = 70;
let alturaCarro = 40;


function preload(){
  imagemDaEstrada = loadImage("material/estrada.png")
  imagemDoAtor = loadImage("material/ator-1.png")
  imagemDoCarro = loadImage("material/carro-1.png")
}

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
}

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, larguraAtor, alturaAtor);
}

function mostraCarro(){
  image(imagemDoCarro, xCarro, yCarro, larguraCarro, alturaCarro);
}  

function movimentaCarro(){
  xCarro -= 2;
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    yAtor += 3;
  }
}