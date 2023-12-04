const formElement = document.querySelector('#age-form');
const questionContainer = document.querySelector('#question-container');
const answerElement = document.querySelector('#answer');

const showAnswer = (value) => {
  if (value) {
    answerElement.innerText =
      'Congratulations! You are on Santa’s Nice 👼 list!';
  } else {
    answerElement.innerText = 'Sorry! You are on Santa’s “Naughty” 😜 list!';
  }
};

const checkAnswer = (e) => {
  const choise = +e.target.dataset.set;
  if (choise) {
    showAnswer(true);
  } else {
    showAnswer(false);
  }
};

const showQuestion = () => {
  const btnsElement = document.querySelectorAll('button[type=button]');
  questionContainer.classList.add('show');
  btnsElement.forEach((item) => {
    item.addEventListener('click', checkAnswer);
  });
};

const checkUserAge = (e) => {
  questionContainer.classList.remove('show');
  answerElement.innerText = '';
  e.preventDefault();

  const age = +e.target[0].value;
  if (age >= 18) {
    showAnswer(true);
  } else {
    showQuestion();
  }
};

formElement.addEventListener('submit', checkUserAge);
