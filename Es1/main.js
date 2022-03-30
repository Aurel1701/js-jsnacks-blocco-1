// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.
 
const first_number = prompt('inserisci un numero')
console.log(first_number);

const second_number = prompt('inserisci un numero')
console.log(second_number);

if (first_number > second_number) {
    console.log(first_number)
    
} else if(first_number < second_number) {
    console.log(second_number)
}