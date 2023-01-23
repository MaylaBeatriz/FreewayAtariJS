//posicao do carro
let xCarro = [600, 600, 600, 600, 600, 600];
let yCarro = [40, 96, 150, 210, 270, 318];
let xCarroInicio = [700, -70, 600, 600, -70, 600];

//tamanho do carro
let larguraCarro = 70;
let alturaCarro = 40;

//velocidade do carro
let velocidadeCarro = [2, -2.5, 3.2, 5, -3.3, 2.3];

function mostraCarro(){
    for (let i = 0; i < imagemCarros.length; i++) {
        image(imagemCarros[i], xCarro[i], yCarro[i], larguraCarro, alturaCarro);
    }
}  
  
function movimentaCarro(){    
    for(let i = 0; i < imagemCarros.length; i++){
        xCarro[i] -= velocidadeCarro[i];
    }
}

function passouTodaATela(xCarro){
    return xCarro < -70 || xCarro > 700 ; 
}

function voltaPosicaoInicialCarro(){
    for(let i = 0; i < imagemCarros.length; i++){
        if(passouTodaATela(xCarro[i])){
            xCarro[i] = xCarroInicio[i];  
        }
    }
}