// declarar variaveis da localização do navio
let location1 = 2;
let location2 = 3; 
let location3 = 4;
// armazena escolha do usuara
let escolhaUser;
// armazena as tentativas
let tentativasFeitas = 0;
// armazena os acertos
let acertos = 0;
// armazena se o navio foi afundado
let navio = false;

// enquanto o navio não foi afundado
while(navio == false) {

  // usuario faça sua escolha
  escolhaUser = prompt("Escolha um numero (0 a 6)");

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
    // compara se o usuario acertou alguma localização
    if(escolhaUser == location1 || escolhaUser == location2 || escolhaUser == location3) {
      // caso acerte, armazene esse acerto no var acertos
      acertos = acertos + 1;

      alert("Acertou!!");
      
      // verifica se o usuario acertou as 3 localização
      if(acertos == 3) {
        // caso acerte, afunde o navio e encerre o jogo
        navio = true;   
        alert("você afundou o navio");
      }

    } 
    // se o usuario errar a localização, avise
    else {
      alert("Errou!!");
    }

  }

}
// ao termino do jogo, uma estatistica sobre pontuação do jogador
alert("Essa foi sua pontuação "+tentativasFeitas+"\n Precisão de "+3/tentativasFeitas);

// base de um futuro codigo
/*function randomF(min, max) {
  number = Math.random() * (max - min)
  return Math.floor(number) ;
}

console.log(randomF(0, 6));
*/