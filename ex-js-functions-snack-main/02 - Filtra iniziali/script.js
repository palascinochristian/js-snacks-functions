/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
const userLetter = "A"


// Dichiara la funzione qui.
const filterInitials = (array, letter) => {
    const filteredArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i][0] === letter) {
            filteredArray.push(array[i]);
        }
    }
    return filteredArray;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(filterInitials(names, userLetter))

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]