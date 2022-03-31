
let somma, numbers

somma = 0
let i = 1

while (i < 10) {
  let numbers = parseInt(prompt (`digita un ${i} numero`))
  somma = numbers + somma;
  i++
  
    
}
console.log(`la somma dei numeri è :${somma}`);
