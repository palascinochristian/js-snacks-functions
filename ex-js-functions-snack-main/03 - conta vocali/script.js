/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
const getVowelsNum = (word) => {
    const vowels = [];
for(let i = 0; i < word.length; i++){
    if(word[i] === "a" ||
       word[i] === "e" || 
       word[i] === "i" || 
       word[i] === "o" || 
       word[i] === "u" ){
        vowels.push(word[i])
    }
}
return vowels.length;
}


// Invoca la funzione qui e stampa il risultato in console

console.log(getVowelsNum(word));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)