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
2 - Aggancio l'event listener al button che carica i dati.
3 - Creare una variabile per il prezzo del biglietto per chilometro.
4 - Inserisco i chilometri che voglio percorrere e li salvo in una variabile.
5 - Inserisco la mia età e la salvo in una variabile.
6 - Calcolare il prezzo del biglietto in base ai chilometri (0.21 € al Km).
7 - In base all'età verficare se l'utente ha diritto a uno sconto:
    -- l'utente ha un'età compresa tra i 19 e i 64 anni: nessuno sconto.
    -- l'utente ha un'età minore o uguale ai 18 anni: calcola lo sconto del 20%.
    -- l'utente ha un'età maggiore o uguale a 65 anni: calcola lo sconto del 40%.
8 - Stampare il prezzo totale del viaggio.
*/

// 1 - Prendo gli elementi dalla pagina
const distance = document.getElementById("distance");
const age = document.getElementById("age");
const upLoad = document.getElementById("upload");

console.log(distance, age, upLoad);


// 2 - Aggancio l'event listener al button che carica i dati.
upLoad.addEventListener('click' , function(){

// 3 - Creo una variabile per il prezzo del biglietto per chilometro.
    const unitPrice = 0.21;

// 4e5 - Inserisco i dati richiesti e li salvo in una variabile. 
    const textDistance = distance.value;
    const textAge = age.value;
    console.log(textDistance, textAge);

// 6 - Calcolo il prezzo del biglietto in base ai chilometri da percorrere.
    const grossPrice = (unitPrice * textDistance).toFixed(2);    
    console.log(grossPrice);
    
    

});


