console.log(document.querySelector('.btn').classList.contains('js-button'));

/*----------------------*/

function toggleButton(selector) {
  const button = document.querySelector(selector); 
  if (!button.classList.contains('is-toggled')) {
    turnOffPreviousButton();
    button.classList.add('is-toggled');
  } else {
    button.classList.remove('is-toggled');
  }
}
function turnOffPreviousButton() {
  const previousButton = document.querySelector('.is-toggled');
  if (previousButton) {
  previousButton.classList.remove('is-toggled');
  }
}
/*- Amozon shipping Calculater -*/

function handleCostKeydown(event) {
  if (event.key === 'Enter') {
    calculateTotal();
  }
}
function calculateTotal() {
  const inputElement = document.querySelector('.js-cost-input');
  let cost = Number(inputElement.value);
  if (cost < 0) {
    document.querySelector('.js-total-cost')
    .innerHTML = `Error: cost cannot be less than $0`;
    document.querySelector('.js-total-cost').classList.add('error-color');
  }
  if (cost >= 0 && cost < 40) {
    cost = cost + 10;
    document.querySelector('.js-total-cost')
      .innerHTML = `$${cost}`;
  }
}
  
// the calculater project

let calculation = localStorage.getItem('calculation') || '';
document.querySelector('.js-screen').innerHTML = localStorage.getItem('calculation');
  function updateCalculation(value) {
    calculation += value;
    document.querySelector('.js-screen').innerHTML = calculation;
    localStorage.setItem('calculation', calculation);
  }

// Optional: you can also create a function in order
// to reuse this code.
  function saveCalculation() {
    localStorage.setItem('calculation', calculation);
  }
