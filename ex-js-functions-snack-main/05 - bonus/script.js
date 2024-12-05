/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
const greetOnTime = (name) => {
    const time = new Date().getHours();
    
    if (time >= 5 && time < 13) {
        return `Buongiorno ${name}! Sono le ${time}!`;
    } else if (time >= 14 && time <= 17) {
        return `Buon pomeriggio ${name}! Sono le ${time}!`;
    } else if (time >= 18 && time <= 24) {
        return `Buonasera ${name}! Sono le ${time}!`;;
    } else {
        return `Sono le ${time} di notte! Vai a letto!! Che ci fai sveglio ${name}!?`;
    }
}




// Invoca la funzione qui e stampa il risultato in console

console.log(greetOnTime(name))

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.