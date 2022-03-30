//Stampa il cubo dei primi N numeri,
//dove N è un numero indicato dall’utente.

const number = prompt('scrivi i numeri')
console.log(number);

for (let i = 0; i < number; i++) {
    let numbers = prompt('scrivi il numero')
    numbers = numbers * numbers * numbers
    console.log(numbers);
    
    
}