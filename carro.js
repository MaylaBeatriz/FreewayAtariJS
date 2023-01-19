//carro
let xCarro = 400;
let yCarro = 40;
let larguraCarro = 70;
let alturaCarro = 40;

function mostraCarro(){
    image(imagemDoCarro, xCarro, yCarro, larguraCarro, alturaCarro);
}  
  
function movimentaCarro(){
    xCarro -= 2;
}