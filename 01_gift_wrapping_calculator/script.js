const showAddNewDataBtn = document.querySelector('#show-new-data-form');
const formElement = document.querySelector('#add-new-data');
let showDemoData = true;

// demo data
const gifts = [
  { width: 10, height: 5, length: 8 },
  { width: 6, height: 4, length: 10 },
  { width: 12, height: 7, length: 5 },
  { width: 8, height: 6, length: 12 },
  { width: 5, height: 3, length: 7 },
];

const newGifts = [];

const calculateData = (demoData) => {
  const result = demoData.reduce((total, item) => {
    total +=
      2 *
      (item.width * item.height +
        item.width * item.length +
        item.height * item.length);
    return total;
  }, 0);

  return result;
};

const showData = () => {
  const textElement = document.querySelector('#demo-data h2');
  textElement.innerText = showDemoData ? 'Demo data' : 'New gifts parameters';
  const dataElement = document.querySelector('#demo-data p');
  dataElement.innerText = JSON.stringify(showDemoData ? gifts : newGifts);
  const resultElement = document.querySelector('#result h2 span');
  resultElement.innerText = calculateData(showDemoData ? gifts : newGifts);
};

const showAddNewDataForm = () => {
  if (newGifts.length) {
    location.reload();
  } else {
    formElement.classList.toggle('show-form');
  }
};

const getNewData = (e) => {
  e.preventDefault();
  const newData = {
    width: e.target[0].value,
    height: e.target[1].value,
    length: e.target[2].value,
  };
  newGifts.push(newData);
  showAddNewDataBtn.innerText = 'If you want to back to demo data - press me';
  showDemoData = false;
  showData();
};

window.addEventListener('DOMContentLoaded', showData);
showAddNewDataBtn.addEventListener('click', showAddNewDataForm);
formElement.addEventListener('submit', getNewData);
