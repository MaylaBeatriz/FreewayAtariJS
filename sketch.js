function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  voltaPosicaoInicialCarro();
  movimentaAtor();
  verificaColisao();
  incluiPonto();
  marcaPonto();
}