//Calcola la somma e la media dei primi 10 numeri.
let number;
let somma = 0, media;

for (var i = 0; i < 10; i++) {
  number = parseInt(prompt('scrivi un numero'));
  somma = somma + number
}

media = somma / 10;
console.log(somma);
console.log(media);
