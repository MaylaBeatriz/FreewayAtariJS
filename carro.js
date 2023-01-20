//carro
let xCarro = [700, 10, 800];
let yCarro = [40, 95, 150];
let velocidadeCarro = [2, 2.5, 3.2];

//carro 1
let larguraCarro1 = 70;
let alturaCarro1 = 40;

//carro 2
let larguraCarro2 = 70;
let alturaCarro2 = 40;

//carro 3
let larguraCarro3 = 70;
let alturaCarro3 = 40;


function mostraCarro(){
    image(imagemDoCarro1, xCarro[0], yCarro[0], larguraCarro1, alturaCarro1);
    image(imagemDoCarro2, xCarro[1], yCarro[1], larguraCarro2, alturaCarro2);
    image(imagemDoCarro3, xCarro[2], yCarro[2], larguraCarro3, alturaCarro3);
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
}