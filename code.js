let localizacao1 = 2;
let localizacao2 = 3; 
let localizacao3 = 4;

let escolhaUsuario;

let tentativasFeitas = 0;

let acertos = 0;

let navio = false;

while(navio == false) {

  escolhaUsuario = prompt("Escolha um numero (0 a 6)");

  if(escolhaUsuario < 0 || escolhaUsuario > 6) {
    alert("Valores invalidos!");
  } else if(escolhaUsuario == null) {
    navio = true;
    alert("Jogo encerrado.");
  } else {

    tentativasFeitas = tentativasFeitas + 1;

    if(escolhaUsuario == localizacao1 || escolhaUsuario == localizacao2 || escolhaUsuario == localizacao3) {

      acertos = acertos + 1;
  
      if(acertos == 3) {
        navio = true;   
        alert("você afundou o navio");
      }
    
    }

  }

}

alert("Essa foi sua pontuação "+tentativasFeitas);

// base de um futuro codigo
/*function randomF(min, max) {
  number = Math.random() * (max - min)
  return Math.floor(number) ;
}

console.log(randomF(0, 6));
*/