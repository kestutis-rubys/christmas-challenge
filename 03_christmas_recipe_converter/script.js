const formElement = document.querySelector('#recipe-form');
const fromUnitSelectElement = document.querySelector('#fromUnit');
const toUnitSelectElement = document.querySelector('#toUnit');

const convertMeasurement = (e) => {
  e.preventDefault();
  const quantity = +e.target[0].value;
  const fromUnit = +e.target[1].value;
  const toUnit = +e.target[2].value;

  switch (true) {
    case fromUnit === 1 && toUnit === 2:
      showResult(quantity, 16, 'tablespoons');
      break;
    case fromUnit === 1 && toUnit === 3:
      showResult(quantity, 48, 'teaspoons');
      break;
    case fromUnit === 2 && toUnit === 1:
      showResult(quantity, 0.0625, 'cups');
      break;
    case fromUnit === 2 && toUnit === 3:
      showResult(quantity, 3, 'teaspoons');
      break;
    case fromUnit === 3 && toUnit === 1:
      showResult(quantity, 0.02083, 'cups');
      break;
    case fromUnit === 3 && toUnit === 2:
      showResult(quantity, 0.33, 'tablespoons');
      break;
  }
};

const showResult = (quantity, value, text) => {
  const resultElement = document.querySelector('#result span');
  resultElement.innerText = (quantity * value).toFixed(2) + ' ' + text;
};

const disableFromToUnitOptions = (option) => {
  const elements = toUnitSelectElement.childNodes;
  for (key in elements) {
    if (!elements[key].value) {
      elements[key].selected = true;
    }
    elements[key].disabled = false;
    if (+elements[key].value === option) {
      elements[key].disabled = true;
    }
  }
};

const getFromUnitValue = (e) => {
  if (toUnitSelectElement.disabled) {
    toUnitSelectElement.disabled = false;
  }
  const choice = +e.target.value;
  disableFromToUnitOptions(choice);
};

fromUnitSelectElement.addEventListener('change', getFromUnitValue);
formElement.addEventListener('submit', convertMeasurement);
