const form = document.getElementById('flashcard-form');
const cardContainer = document.getElementById('card-container');
const questionInput = document.getElementById('question');
const answerInput = document.getElementById('answer');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const question = questionInput.value.trim();
  const answer = answerInput.value.trim();

  if (question && answer) {
    const card = createCard(question, answer);
    cardContainer.appendChild(card);
    questionInput.value = '';
    answerInput.value = '';
  }
});

function createCard(question, answer) {
  const card = document.createElement('div');
  card.classList.add('card');

  const cardInner = document.createElement('div');
  cardInner.classList.add('card-inner');

  const front = document.createElement('div');
  front.classList.add('card-front');
  front.textContent = question;

  const back = document.createElement('div');
  back.classList.add('card-back');
  back.textContent = answer;

  const removeBtn = document.createElement('button');
  removeBtn.className = 'remove-btn';
  removeBtn.textContent = '✖';
  removeBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    card.remove();
  });

  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });

  cardInner.appendChild(front);
  cardInner.appendChild(back);
  card.appendChild(cardInner);
  card.appendChild(removeBtn);

  return card;
}

// Default flashcards
const defaultFlashcards = [
  { question: 'What is the capital of France?', answer: 'Paris' },
  { question: 'What does HTML stand for?', answer: 'HyperText Markup Language' },
  { question: '2 + 2 = ?', answer: '4' },
];

defaultFlashcards.forEach(({ question, answer }) => {
  const card = createCard(question, answer);
  cardContainer.appendChild(card);
});
