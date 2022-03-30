// Crea un array vuoto.
//Chiedi per 6 volte all’utente di inserire un numero,
//se è dispari inseriscilo nell’array.

const list = []

 let number = 0


for (let i = 0; i < 6; i++) {
    let number = parseInt(prompt('inserisci un numero '))

    if (number % 2 == 0) {
        list.push(number)
        console.log(number);
    } 
        

}



  
