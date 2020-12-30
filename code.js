let locationOne = 3;
let locationTwo = 4;
let locationThree = 5;

// vai manter o palpite atual do usuario
let guess;

// vai conter os acertos do usuario
let hits = 0;

// vai conter os palpites do usuario
let guesses = 0;

// vai manter o registro se o navio afundou ou não
let isSunk = false;

while(isSunk === false) {
  
  // Obter a entrada do usuario
  guess = prompt("Informe um palpite: ");

  // verifica se é valido
  if(guess < 0 || guess > 6) {
    Alert('Os Valores são invalidos');

  } else {
    guesses = guesses + 1;

    if(guess == locationOne || guess == locationTwo || guess == locationThree) {
      hits = hits + 1;

      if(hits == 3) {
        isSunk = true;
        alert("Você afundou meu navio de guerra");
      
      } // Fim se

    } // FIm se 
  
  } // Fim senao

} // Fim while

alert('Você acertou: '+hits);