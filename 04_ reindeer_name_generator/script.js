const generateRandomNamesBtnElement =
  document.querySelector('#random-names-btn');
const sortBtnElement = document.querySelector('#sort-btn');
const reindeerNamesList = document.querySelector('#raindeer-names');
const messageElement = document.querySelector('#message');

const reindeerNames = [
  'Dasher',
  'Dancer',
  'Prancer',
  'Vixen',
  'Comet',
  'Cupid',
  'Donner',
  'Blitzen',
  'Rudolph',
];

let isSorted;
const selectedNames = [];

const generateRandomNumber = (array) => {
  return Math.floor(Math.random() * array.length);
};

const generateNewReindeerName = (e) => {
  messageElement.innerText = '';
  const id = e.target.dataset.id;
  const unusedReindeerNames = reindeerNames.filter(
    (item) => !selectedNames.includes(item)
  );
  const randomNumber = generateRandomNumber(unusedReindeerNames);
  const liElements = document.querySelectorAll('li');
  liElements[id].innerText = unusedReindeerNames[randomNumber];
  selectedNames[id] = unusedReindeerNames[randomNumber];
  if (isSorted) {
    allowSorted(false);
  }
};

const generateNameBtn = (id) => {
  const newNameBtn = document.createElement('button');
  newNameBtn.innerText = 'Generate new Reindeer name';
  newNameBtn.dataset.id = id;
  newNameBtn.addEventListener('click', generateNewReindeerName);
  return newNameBtn;
};

const showNames = (names) => {
  reindeerNamesList.innerHTML = '';
  for (item in names) {
    const listItem = document.createElement('li');
    listItem.innerText = names[item];
    reindeerNamesList.append(listItem, generateNameBtn(item));
  }
};

const allowSorted = (value) => {
  if (!isSorted || !value) {
    sortBtnElement.addEventListener('click', sortReindeerNames);
    isSorted = value;
  }
};

const generateRandomNames = () => {
  if (selectedNames.length) {
    selectedNames.length = 0;
  }

  for (let i = 0; selectedNames.length !== 5; i++) {
    const randomNumber = generateRandomNumber(reindeerNames);
    const randomWord = reindeerNames[randomNumber];
    if (!selectedNames.includes(randomWord)) {
      selectedNames.push(randomWord);
    }
  }
  showNames(selectedNames);
  allowSorted(false);
};

const sortReindeerNames = () => {
  if (!isSorted) {
    messageElement.innerText = '';
    isSorted = true;
    showNames(selectedNames.sort());
  } else {
    messageElement.innerText = 'Reindeers names are already sorted.';
    sortBtnElement.removeEventListener('click', sortReindeerNames);
  }
};

generateRandomNamesBtnElement.addEventListener('click', generateRandomNames);
