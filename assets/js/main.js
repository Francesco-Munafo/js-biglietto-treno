/*

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va stampato in forma umana (ovvero con massimo due decimali, per indicare i centesimi sul prezzo).
Questo richiederà un minimo di ricerca nella documentazione di JS.

*/

/* Strumenti

- alert 
- prompt x2 numero km ed età
- let/const
- Number
- console.log
- if/else
- toFixed()
-.getElementById
*/

// Do il benvenuto all'utente

alert('Benvenuto nel price calculator! Segui le istruzioni per favore.')


//BONUS

const userName = prompt('Come ti chiami?')

// Chiedo all'utente quanti km deve percorrere e trasformo il valore in numero

const kilometers = Number(prompt('Quanti chilometri devi percorrere? es. 1.5'));

// Aggiungo il controllo dei dati inseriti

if (kilometers.NaN || kilometers <= 0)
  alert('Inserisci solo valori numerici superiori a 0!')  


console.log(kilometers);

//Chiedo all'utente la sua età

const userAge = Number(prompt('Quanti anni hai?'));
if (userAge.NaN || userAge <= 0)
  alert('Inserisci solo valori numerici superiori a 0!')
console.log(userAge);

// Calcolo il prezzo in base al costo/km e all'età arrotondando il prezzo

const teenagerDiscount = Number(0.80);     //                                                       Lo sconto del 20% equivale a moltiplicare per 0.80
const adultDiscount = Number(0.60);         //      DEFINISCO LE COSTANTI PER IL CALCOLO DEL PREZZO Lo sconto del 40% equivale a moltiplicare per 0.60
const perKmPrice = Number(0.21);            //                                                      
let totalPrice
let fixedPrice

if (userAge < 18) {
    totalPrice = kilometers * perKmPrice * teenagerDiscount;
    console.log(totalPrice);

// Qui ho applicato l'arrotondamento dei decimali secondo la documentazione di w3schools
    fixedPrice = totalPrice.toFixed(2);  
    console.log(fixedPrice);

} else if (userAge > 65) {
    totalPrice = kilometers * perKmPrice * adultDiscount;
    console.log(totalPrice);

// Qui ho applicato l'arrotondamento dei decimali secondo la documentazione di w3schools
    fixedPrice = totalPrice.toFixed(2);
    console.log(fixedPrice);
} else {
    totalPrice = kilometers * perKmPrice;
    console.log(totalPrice);

// Qui ho applicato l'arrotondamento dei decimali secondo la documentazione di w3schools
    fixedPrice = totalPrice.toFixed(2);
    console.log(fixedPrice);
}

console.log(fixedPrice);

// Inserisco le informazioni calcolate con alcuni messaggi per migliorare l'esperienza
document.getElementById('cheers').innerHTML= 'Ottimo' + " " + userName + "!";
document.getElementById('description').innerHTML= 'In base ai dati aggiunti, il tuo prezzo finale è' + ":";
document.getElementById('prezzo').innerHTML=  + fixedPrice + '€';

