console.log(" JS OK ");

/* 
TRACCIA

Descrizione:
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

/*
ANALISI
1 - Prendere gli elementi dalla pagina.
2 - Creare una variabile per il prezzo del biglietto per chilometro.
3 - Aggancio l'event listener al button che carica i dati.
4 - Inserisco i chilometri che voglio percorrere e li salvo in una variabile.
5 - Inserisco la mia età e la salvo in una variabile.
6 - Controllo che il valore dei dati inseriti sia corretto.
7 - Calcolare il prezzo del biglietto in base ai chilometri (0.21 € al Km).
8 - In base all'età verficare se l'utente ha diritto a uno sconto:
    -- l'utente ha un'età compresa tra i 19 e i 64 anni: nessuno sconto.
    -- l'utente ha un'età minore o uguale ai 18 anni: calcola lo sconto del 20%.
    -- l'utente ha un'età maggiore o uguale a 65 anni: calcola lo sconto del 40%.
9 - Stampare in pagina un form con i dati inseriti e il prezzo da pagare e stlilizzarlo.
*/

// 1 - Prendo gli elementi dalla pagina
const distance = document.getElementById("distance");
const age = document.getElementById("age");
const upLoad = document.getElementById("upload");
const finalPrice = document.getElementById("final-price");
const recharge = document.getElementById("recharge");
const numberWagon = document.getElementById("wagon");
const ticketCode = document.getElementById("ticket-code");
const cleanFieldButton = document.getElementById('clean-field');

console.log(distance, age, upLoad);

// 2 - Creo una variabile per il prezzo del biglietto per chilometro.
const unitPrice = 0.21;

// Creo delle variabili per generare numeri random
const random = Math.random();
const maxRandomWagon = 9;
const minRandomCode = 10000;
const maxRandomCode = 99999;

// 3 - Aggancio l'event listener al button che carica i dati.
upLoad.addEventListener('click' , function(){
    
// 4e5 - Inserisco i dati richiesti e li salvo in una variabile. 
const textDistance = parseInt(distance.value.trim());
const textAge = parseInt(age.value.trim());
console.log(textDistance, textAge);

// 6 - Controllo che il valore dei dati inseriti sia corretto.
    if (isNaN(textDistance) || isNaN(textAge) || textDistance <= 0 || textAge <= 0) {
       alert("inserire solo valori numerici interi e maggiori di 0")
    } else {

    // 7 - Calcolo il prezzo del biglietto in base ai chilometri da percorrere.
    const grossPrice = (unitPrice * textDistance).toFixed(2);    
    
    // 8e9 - in base all'età verificare se l'utente ha diritto a uno sconto e stampare il prezzo in pagina  
    if (textAge > 18 && textAge < 65) {
       console.log(`Il prezzo da pagare è € ${grossPrice}`)
       finalPrice.innerText = (`Il costo del biglietto è di € ${grossPrice}`)
    
    } else if(textAge < 19){
       const smallDiscount = ((grossPrice / 100) * 80).toFixed(2);
       console.log(`Il prezzo per i minorenni è di € ${smallDiscount}`)
       finalPrice.innerText = (`Il costo del biglietto è di € ${smallDiscount}`)

    } else {
       const bigDiscount = ((grossPrice / 100) * 60).toFixed(2);
       console.log(`Il prezzo per gli over 65 è di € ${bigDiscount}`)
       finalPrice.innerText = (`Il costo del biglietto è di € ${bigDiscount}`)
    }

    }
    
    // Generare numeri random per la carrozza ed il codice del biglietto
    let result = Math.floor(random * maxRandomWagon) + 1;
    numberWagon.innerText = result;

    result = Math.floor(random * (maxRandomCode + 1 - minRandomCode)) + minRandomCode;
    ticketCode.innerText = result;

});

cleanFieldButton.addEventListener('click', function(){
    distance.value = '';
    age.value = '';
    finalPrice.innerText = '';
    numberWagon.innerText = '';
    ticketCode.innerText = '';

});




