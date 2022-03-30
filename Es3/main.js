//Il software deve chiedere per 10 volte all’utente di inserire un numero.
//Il programma stampa la somma di tutti i numeri inseriti.



for (let i = 0; i < 11; i++) {
  let numbers = Number(prompt ('digita un numero'))
  numbers = numbers + i;
  console.log(numbers);
}



