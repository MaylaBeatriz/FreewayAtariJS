//posicao do carro
let xCarro = [700, 10, 800];
let yCarro = [40, 96, 150];

//tamanho do carro
let larguraCarro = 70;
let alturaCarro = 40;

//velocidade do carro
let velocidadeCarro = [2, 2.5, 3.2];

function mostraCarro(){
    for (let i = 0; i < imagemCarros.length; i = i + 1) {
        image(imagemCarros[i], xCarro[i], yCarro[i], larguraCarro, alturaCarro);
    }
}  
  
function movimentaCarro(){
    xCarro[0] -= velocidadeCarro[0];
    xCarro[1] += velocidadeCarro[1];
    xCarro[2] -= velocidadeCarro[2];
}

function voltaPosicaoInicialCarro(){
    if (xCarro[0] < -70){
        xCarro[0] = 700;
    }
    if (xCarro[1] > 800){
        xCarro[1] = -70;
    }
    if (xCarro[2] < -70){
        xCarro[2] = 600;
    }
}