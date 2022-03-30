// L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

const first_add = prompt('inserisci una parola')
console.log(first_add);

const second_add = prompt('inserisci una parola')
console.log(second_add);

//let parola;

if (first_add > second_add) {
    document.querySelector('.risultato').insertAdjacentHTML("afterend", first_add);
    document.querySelector('.risultato-2').insertAdjacentHTML("afterend", second_add);
    

} else if (first_add < second_add) {
    document.querySelector('.risultato').insertAdjacentHTML("afterend", first_add);
    document.querySelector('.risultato-2').insertAdjacentHTML("afterend", second_add);
    

}