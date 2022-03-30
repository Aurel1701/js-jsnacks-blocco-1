//Chiedi un numero di 4 cifre all’utente
//e calcola la somma di tutte le cifre che compongono il numero.


const number = Number(prompt('Scrivi un numero di 4 cifre'))


const list = Array.from(String(number), Number);
console.log(list);

 if (list.length === 4) {
     let risultato = list[0] + list[1] + list[2] + list[3]
     console.log(risultato);

    
}

