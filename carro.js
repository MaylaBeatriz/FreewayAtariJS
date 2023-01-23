//posicao do carro
let xCarro = [700, 10, 800];
let yCarro = [40, 96, 150];
let xCarroInicio = [700, -70, 600];

//tamanho do carro
let larguraCarro = 70;
let alturaCarro = 40;

//velocidade do carro
let velocidadeCarro = [ 2, -2.5, 3.2 ];

function mostraCarro(){
    for (let i = 0; i < imagemCarros.length; i = i + 1) {
        image(imagemCarros[i], xCarro[i], yCarro[i], larguraCarro, alturaCarro);
    }
}  
  
function movimentaCarro(){    
    for(let i = 0; i < imagemCarros.length; i = i + 1){
        xCarro[i] -= velocidadeCarro[i];
    }
}

function passouTodaATela(xCarro){
    return xCarro < - 70 || xCarro > 800 ; 
}

function voltaPosicaoInicialCarro(){
    for(let i = 0; i < imagemCarros.length; i = i + 1){
        if(passouTodaATela(xCarro[i])){
            xCarro[i] = xCarroInicio[i];  
        }
    }
}