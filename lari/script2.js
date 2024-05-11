const waveTexts = document.querySelectorAll('.wave-text');

waveTexts.forEach((text) => {
  const words = text.textContent.split(' ');
  text.innerHTML = '';

  words.forEach((word) => {
    const wordElement = document.createElement('span');
    wordElement.classList.add('wave-word');
    wordElement.textContent = word + ' ';
    text.appendChild(wordElement);
  });
});

const waveWords = document.querySelectorAll('.wave-word');

function animateWaves() {
  waveWords.forEach((word, index) => {
    const delay = index * 0.1; // Adjust the delay between each word
    word.style.animation = `wave 2s ease ${delay}s infinite`;
  });
}

animateWaves();
