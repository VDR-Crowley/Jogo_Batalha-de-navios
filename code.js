// armazena a localização no navio aleatorio
function vRandom(location1, location2, location3) {
  let newNumber = ''

  if(location2 == location1){
    newNumber = Math.floor(Math.random() * 6);
    location2 = newNumber;
  } 
  else if(location3 == location2 || location3 == location1) {
    newNumber = Math.floor(Math.random() * 6);
    location3 = newNumber;
  }
}

function getRandom(min, max) {
  const random = Math.floor(Math.random() * (max - min) + min);
  return random;
}

// declarar variaveis da localização do navio
let location1 = getRandom(0, 6);
let location2 = getRandom(0, 6); 
let location3 = getRandom(0, 6);

// armazena escolha do usuara
let escolhaUser;
// armazena as tentativas
let tentativasFeitas = 0;
// armazena os acertos
let acertos = 0;
// armazena se o navio foi afundado
let navio = false;

// armazena um novo valor random
let newRandom = ''

// enquanto o navio não foi afundado
while(navio == false) {

  // usuario faça sua escolha
  escolhaUser = parseInt(prompt("Escolha um numero (0 a 6)"));

  // ver se a condição digitada pelo usuario é valida
  if(escolhaUser < 0 || escolhaUser > 6) {
    alert("Valores invalidos!");
  } 
  // verifica se o jogador clicou em cancelar
  else if(escolhaUser == null) {
    // encerrar o jogo
    navio = true;
    alert("Jogo encerrado.");
  } 
  // se os numero informado for valido 
  else {
    // então tentativas vai receber 1
    tentativasFeitas = tentativasFeitas + 1;

    console.log(location1, location2, location3);
    vRandom(location1, location2, location3);

    //compara se o usuario acertou alguma localização
    if(acertos == 0) {
      if(escolhaUser === location1) { 
        acertos = acertos + 1;
        alert("Acertou!!");
      } else {
        alert("Errou!!");
      }
    } else if(acertos == 1) {
      if(escolhaUser === location2) {
        acertos = acertos + 1;
        alert("Acertou!!");
      } else {
        alert("Errou!!");
      }
    } else if(acertos == 2) {
      if(escolhaUser === location3) {
        acertos = acertos + 1;
        alert("Acertou!!");

        // caso acerte, afunde o navio e encerre o jogo
        navio = true;   
        alert("você afundou o navio");
      } else {
        alert("Errou!!");
      }
    }

  }

}


// ao termino do jogo, uma estatistica sobre pontuação do jogador
alert("Essa foi sua pontuação "+tentativasFeitas+"\n Precisão de "+(3/tentativasFeitas).toFixed(2));



/*

    

    
*/