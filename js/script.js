// seleziono elementi form
// const form = document.querySelector('.form');
const nameField = document.getElementById('name-field');
const ageField = document.getElementById('age-field');
const distanceField = document.getElementById('distance-field');

// seleziono bottoni
const generateBtn = document.getElementById('generate');
const cancelBtn = document.getElementById('cancel')

// seleziono elementi target
const ticketSection = document.getElementById('ticket')
const name = document.getElementById('ticketName')
const age = document.getElementById('ticketAge')
const distance = document.getElementById('ticketDistance')
const price = document.getElementById('ticketPrice');


// funzione
const prezzoKm = 0.21;
const scontoMinorenni = 20;
const scontoOver65 = 40;

function ticketPriceCalc(event) {
  event.preventDefault();
  const passengerAge = parseInt(ageField.value);
  const kmTot = parseInt(distanceField.value);

  let ticketPriceValue = prezzoKm * kmTot;

  if (passengerAge < 18) {
    ticketPriceValue *= (1 - scontoMinorenni / 100);
  } else if (passengerAge >= 65) {
    ticketPriceValue *= (1 - scontoOver65 / 100);
  }
  // milestone 2
  // info del biglietto
  ticketName.textContent = nameField.value.trim();
  ticketAge.textContent = ageField.value.trim();
  ticketDistance.textContent = distanceField.value.trim();
  ticketPrice.textContent = ticketPriceValue.toFixed(2);
}



// evento per calcolo al 'generate'
generateBtn.addEventListener('click', ticketPriceCalc);

// cancello dati con 'cancel'
cancelBtn.addEventListener('click', () => {
  nameField.value = '';
  ageField.value = '';
  distanceField.value = '';
})


