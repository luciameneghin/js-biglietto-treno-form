// seleziono elementi form

// const form = document.querySelector('.form');
// const nameField = document.getElementById('name');

const ageField = document.getElementById('age');
const distanceField = document.getElementById('distance');

// seleziono bottoni
const generateBtn = document.getElementById('generate');
// const cancelBtn = document.getElementById('cancel')

const resultDiv = document.getElementById('result');


const prezzoKm = 0.21;
const scontoMinorenni = 20;
const scontoOver65 = 40;

function ticketPriceCalc(event) {
  event.preventDefault();
  const passengerAge = parseInt(ageField.value);
  const kmTot = parseInt(distanceField.value);
  let ticketPrice = prezzoKm * kmTot;

  if (passengerAge < 18) {
    ticketPrice *= (1 - scontoMinorenni / 100);
  } else if (passengerAge >= 65) {
    ticketPrice *= (1 - scontoOver65 / 100);
  }
  console.log(`Il prezzo finale del biglietto è: €${ticketPrice.toFixed(2)}`);
}
// evento per calcolare prezzo
generateBtn.addEventListener('click', ticketPriceCalc);

// generateBtn.addEventListener('click', () => {
//   name.innerText = nameField.value;
//   console.log(nameField.value);
//   age.innerText = ageField.value;
//   distance.innerText = distanceField.value;
// })
// console.log(generateBtn.value);

// cancelBtn.addEventListener('click', () => {
//   nameField.value = '';
//   ageField.value = '';
//   distanceField.value = '';
// })



