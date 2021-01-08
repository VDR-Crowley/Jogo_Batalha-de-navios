// função responsavel por fazer a verificação se uma localização é igual a outra
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

// cria função responsavel por gerar um numero aleatorio
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
    // console para teste
    console.log(location1, location2, location3);
    vRandom(location1, location2, location3);
    console.log(location1, location2, location3);

    // compara se acertos vale 0
    if(acertos == 0) {
      //compara se o usuario acertou a primeira localização
      if(escolhaUser === location1) { 
        acertos = acertos + 1;
        alert("Acertou!!");
      } else {
        alert("Errou!!");
      }
    } 
    // compara se acertos vale 1
    else if(acertos == 1) {
      //compara se o usuario acertou a segunda localização
      if(escolhaUser === location2) {
        acertos = acertos + 1;
        alert("Acertou!!");
      } else {
        alert("Errou!!");
      }
    } 
    // compara se acerto vale  2
    else if(acertos == 2) {
      //compara se o usuario acertou a terceira localização
      if(escolhaUser === location3) {
        acertos = acertos + 1;
        alert("Acertou!!");

        // acertos vale 3 então afunde o barco
        navio = true;   
        alert("você afundou o navio");
      } else {
        alert("Errou!!");
      }
    }

  }

}

// ao termino do jogo, uma estatistica sobre pontuação do jogador
alert("Essa foi sua pontuação: "+tentativasFeitas+" Precisão de: "+(3/tentativasFeitas).toFixed(2));
