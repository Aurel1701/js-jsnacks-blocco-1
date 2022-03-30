// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
const firstName = prompt('scrivi il tuo nome')
console.log(firstName);
let count = 0

const list = [ 'Marco', 'Goku', 'Vegeta', 'Maldini', 'Leao' ]

for (let i = 0; i < list.length; i++) {

    if (firstName == list[i]) {
        count++

    } 
        

}

if (count !== 0) {
    alert('puoi partecipare alla festa')
    
} else{
    alert('non puoi accedere, mi spiace')
}