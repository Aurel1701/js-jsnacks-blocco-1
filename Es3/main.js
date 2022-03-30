//Il software deve chiedere per 10 volte all’utente di inserire un numero.
//Il programma stampa la somma di tutti i numeri inseriti.

let somma, numbers

somma = 0

for (let i = 0; i < 10; i++) {
  let numbers = Number(prompt ('digita un numero'))
  somma = numbers + somma;
  
}
console.log(numbers);



