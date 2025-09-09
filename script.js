document.addEventListener("DOMContentLoaded", () => {
  const heartsContainer = document.getElementById("hearts");
  const randomMessagesContainer = document.getElementById("randomMessages");
  const randomMsgBtn = document.getElementById("randomMsgBtn");
  const rainHeartsBtn = document.getElementById("rainHeartsBtn");

  const randomLoveMessages = [
    "Ti si moj svet 💞",
    "Zauvek zajedno",
    "Moj mili 💗",
    "Ti si moje zauvek 🌸",
    "Volim te"
  ];

  // Funkcija za kreiranje srca
  function createHeart(x = Math.random() * window.innerWidth, y = Math.random() * window.innerHeight) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.textContent = "💗";
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
    heartsContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 2000);
  }

  // Srca koja prate kursor
  document.addEventListener("mousemove", e => {
    if (Math.random() < 0.05) {
      createHeart(e.clientX, e.clientY);
    }
  });

  // Nasumična poruka
  function showRandomMessage() {
    const msg = document.createElement("div");
    msg.classList.add("random-msg");
    msg.textContent = randomLoveMessages[Math.floor(Math.random() * randomLoveMessages.length)];
    msg.style.left = `${Math.random() * 70 + 15}%`;
    msg.style.top = `${Math.random() * 50 + 30}%`;
    randomMessagesContainer.appendChild(msg);
    setTimeout(() => msg.remove(), 3000);
  }

  // Klik na dugme – prikaži poruku
  randomMsgBtn.addEventListener("click", showRandomMessage);

  // Klik na dugme – kiša srca
  rainHeartsBtn.addEventListener("click", () => {
    for (let i = 0; i < 30; i++) {
      createHeart(Math.random() * window.innerWidth, Math.random() * window.innerHeight);
    }
  });

  // Stalno lebdeća srca u pozadini
  setInterval(() => createHeart(), 2000);
});
