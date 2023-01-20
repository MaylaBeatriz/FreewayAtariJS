//carro 1
let xCarro1 = 700;
let yCarro1 = 40;
let larguraCarro1 = 70;
let alturaCarro1 = 40;
let velocidadeCarro1 = 2;

//carro 2
let xCarro2 = 10;
let yCarro2 = 95;
let larguraCarro2 = 70;
let alturaCarro2 = 40;
let velocidadeCarro2 = 2.5;

//carro 3
let xCarro3 = 800;
let yCarro3 = 150;
let larguraCarro3 = 70;
let alturaCarro3 = 40;
let velocidadeCarro3 = 3.2;


function mostraCarro(){
    image(imagemDoCarro1, xCarro1, yCarro1, larguraCarro1, alturaCarro1);
    image(imagemDoCarro2, xCarro2, yCarro2, larguraCarro2, alturaCarro2);
    image(imagemDoCarro3, xCarro3, yCarro3, larguraCarro3, alturaCarro3);
}  
  
function movimentaCarro(){
    xCarro1 -= velocidadeCarro1;
    xCarro2 += velocidadeCarro2;
    xCarro3 -= velocidadeCarro3;
}