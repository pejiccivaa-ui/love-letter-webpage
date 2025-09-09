const sendBtn = document.getElementById('sendBtn');
const userInput = document.getElementById('userInput');
const message = document.getElementById('message');
const heartsContainer = document.getElementById('hearts');

sendBtn.addEventListener('click', () => {
  const text = userInput.value.trim();
  if(text) {
    message.textContent = `Tvoja poruka: "${text}" 💕`;
    createHearts(5);
    userInput.value = '';
  } else {
    message.textContent = "Upiši nešto prvo! 💖";
  }
});

function createHearts(count) {
  for(let i=0; i<count; i++){
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.textContent = '💗';
    heart.style.left = `${Math.random() * 80 + 10}%`;
    heartsContainer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 1500);
  }
}
