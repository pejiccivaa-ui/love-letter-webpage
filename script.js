const userInput = document.getElementById('userInput');
const message = document.getElementById('message');
const heartsContainer = document.getElementById('hearts');
const randomMessagesContainer = document.getElementById('randomMessages');
const buttons = document.querySelectorAll('.magic-btn');

const randomLoveMessages = [
  "Sve si mi u životu",
  "Zauvek zajedno 💞",
  "Moj mili 💗",
  "Ti si moje sve",
  "Volim te, mili"
];

// Funkcija za lebdeća srca
function createHearts(count = 1) {
  for (let i = 0; i < count; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.textContent = '💗';
    heart.style.left = `${Math.random() * 90}%`;
    heart.style.top = `${Math.random() * 80 + 10}%`;
    heartsContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 2000);
  }
}

// Funkcija za nasumične poruke
function showRandomMessage() {
  const msg = document.createElement('div');
  msg.classList.add('random-msg');
  msg.textContent = randomLoveMessages[Math.floor(Math.random() * randomLoveMessages.length)];
  msg.style.left = `${Math.random() * 70 + 15}%`;
  msg.style.top = `${Math.random() * 50 + 30}%`;
  randomMessagesContainer.appendChild(msg);
  setTimeout(() => msg.remove(), 3000);
}

// Dugmad sa porukama
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const text = btn.dataset.msg; // sigurniji način nego getAttribute
    message.textContent = text;
    createHearts(5);
    showRandomMessage();
  });
});

// Enter u input polju
userInput.addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    const text = userInput.value.trim();
    if (text) {
      message.textContent = `Tvoja poruka: "${text}" 💕`;
      createHearts(5);
      showRandomMessage();
      userInput.value = '';
    }
  }
});

// Stalno lebdeća srca
setInterval(() => createHearts(1), 1000);

// Stalno nasumične poruke
setInterval(() => showRandomMessage(), 4000);

