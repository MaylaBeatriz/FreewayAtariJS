
function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(imagemDaEstrada);
  preload();
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
}