// Dati noti
const prezzoKm = 0.21;
const scontoMinorenni = 20;
const scontoOver65 = 40;


// Richiesta all'utente di km da percorrere ed età
const kmTot = parseInt(prompt('Inserire Km da percorrere'));
console.log('km tot=', kmTot)
prezzoBiglietto = prezzoKm * kmTot;
let etàPasseggero = parseInt(prompt('Inserire Età'));
console.log('età=', etàPasseggero)

if (etàPasseggero < 18) {
  prezzoBiglietto *= (1 - scontoMinorenni / 100);
  message = `Applicato sconto del ${scontoMinorenni.toFixed(2)}% per minorenni`;
} else if (etàPasseggero >= 65) {
  prezzoBiglietto *= (1 - scontoOver65 / 100);
  message = `Applicato sconto del ${scontoOver65.toFixed(2)}% per Over 65`;
} else {
  message = `Il prezzo del biglietto è di €${prezzoBiglietto}`;
}
console.log(message);