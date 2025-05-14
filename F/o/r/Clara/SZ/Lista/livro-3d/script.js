// === Configuração Geral ===
let currentPageGroup = 0; // Para modo desktop
let currentPageIndex = 0; // Para modo mobile
const pages = document.querySelectorAll('.page');
const totalPages = pages.length;

// Lista de músicas
const musicList = [
  { title: "No Escuro", src: "music/NoEscuro.mp3" },
  { title: "Lisboa", src: "music/Lisboa.mp3" },
  { title: "Vicio de Amor", src: "music/Viciodeamor.mp3" },
  { title: "Pupila", src: "music/Pupila.mp3" },
  { title: "Afrodite", src: "music/Afrodite.mp3" },
];

let currentTrackIndex = 0;
const audioElement = document.getElementById('musicAudio');
const musicTitle = document.getElementById('musicTitle');

// Lista de imagens para background aleatório
const imageList = [
  'imgassets/fundo1.jpeg',
  'imgassets/fundo2.jpeg',
  'imgassets/fundo3.jpeg',
  'imgassets/fundo4.jpeg',
  'imgassets/fundo5.jpeg',
  'imgassets/fundo6.jpeg',
  'imgassets/fundo7.jpeg',
  'imgassets/fundo8.jpeg',
  'imgassets/fundo9.jpeg',
  'imgassets/fundo10.jpeg',
  'imgassets/fundo11.jpeg',
  'imgassets/fundo12.jpeg',
  'imgassets/fundo13.jpeg',
  'imgassets/fundo14.jpeg',
  'imgassets/fundo15.jpeg',
  'imgassets/fundo16.jpeg',
  'imgassets/fundo17.jpeg',
  'imgassets/fundo18.jpeg',
  'imgassets/fundo19.jpeg',
  'imgassets/fundo20.jpeg'
];

// === Funções do Livro Virtual ===
function updateBookView(direction) {
  // Esconde todas as páginas e limpa texto
  pages.forEach(p => {
    p.style.display = 'none';
    p.classList.remove('page--visible');

    const textElements = p.querySelectorAll('[data-original]');
    textElements.forEach(el => {
      el.textContent = '';
    });
  });

  if (window.innerWidth > 700) {
    // Modo desktop - duas páginas lado a lado
    const pageLeft = pages[currentPageGroup * 2];
    const pageRight = pages[currentPageGroup * 2 + 1];

    if (pageLeft) {
      pageLeft.style.display = 'flex';
      setTimeout(() => pageLeft.classList.add('page--visible'), 400);
      applyTypingEffect(pageLeft);
    }

    if (pageRight) {
      pageRight.style.display = 'flex';
      setTimeout(() => pageRight.classList.add('page--visible'), 400);
      applyTypingEffect(pageRight);
    }
  } else {
    // Modo mobile - uma página por vez
    const pageToShow = pages[currentPageIndex];
    if (pageToShow) {
      pageToShow.style.display = 'flex';
      setTimeout(() => pageToShow.classList.add('page--visible'), 400);
      applyTypingEffect(pageToShow);
    }
  }

  updateCounter();
}

function updateCounter() {
  const counter = document.getElementById('pageCounter');
  if (!counter) return;

  if (window.innerWidth > 700) {
    const leftPage = currentPageGroup * 2 + 1;
    const rightPage = currentPageGroup * 2 + 2;
    counter.textContent = `Páginas ${leftPage} - ${rightPage <= totalPages ? rightPage : ''} / ${totalPages}`;
  } else {
    counter.textContent = `Página ${currentPageIndex + 1} / ${totalPages}`;
  }
}

function turnPage(direction) {
  if (window.innerWidth > 700) {
    // Navegação por grupo no desktop
    if (direction === 'next' && currentPageGroup < Math.floor((totalPages - 1) / 2)) {
      currentPageGroup++;
      updateBookView('next');
    } else if (direction === 'prev' && currentPageGroup > 0) {
      currentPageGroup--;
      updateBookView('prev');
    }
  } else {
    // Navegação sequencial no mobile
    if (direction === 'next' && currentPageIndex < totalPages - 1) {
      currentPageIndex++;
      updateBookView('next');
    } else if (direction === 'prev' && currentPageIndex > 0) {
      currentPageIndex--;
      updateBookView('prev');
    }
  }
}

// Swipe para dispositivos móveis
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', e => {
  touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', e => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
});

function handleSwipe() {
  const diff = touchEndX - touchStartX;
  if (Math.abs(diff) > 30) {
    if (diff > 0) {
      turnPage('prev'); // Swipe direita → voltar
    } else {
      turnPage('next'); // Swipe esquerda → avançar
    }
  }
}

// === Toggle Dark Mode com memória ===
function toggleTheme() {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
}

// Aplica dark mode ao carregar
window.onload = () => {
  // Modo noturno salvo
  if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
  }

  // Inicializa livro virtual
  if (window.innerWidth > 700) {
    const pageLeft = pages[0];
    const pageRight = pages[1];

    if (pageLeft) {
      pageLeft.style.display = 'flex';
      setTimeout(() => pageLeft.classList.add('page--visible'), 400);
      applyTypingEffect(pageLeft);
    }

    if (pageRight) {
      pageRight.style.display = 'flex';
      setTimeout(() => pageRight.classList.add('page--visible'), 400);
      applyTypingEffect(pageRight);
    }

    currentPageGroup = 0;
  } else {
    const pageToShow = pages[0];
    if (pageToShow) {
      pageToShow.style.display = 'flex';
      setTimeout(() => pageToShow.classList.add('page--visible'), 400);
      applyTypingEffect(pageToShow);
    }

    currentPageIndex = 0;
  }

  updateCounter();

  // Inicia o background aleatório
  setInterval(createRandomBackgroundImage, 2000);
};

// === Efeito de Digitação (Typewriter) ===
function applyTypingEffect(pageElement) {
  if (!pageElement) return Promise.resolve();

  const textElements = pageElement.querySelectorAll("[data-original]");
  let typingPromises = [];

  textElements.forEach(el => {
    const originalText = el.getAttribute('data-original');
    el.textContent = '';

    const promise = new Promise(resolve => {
      let charIndex = 0;
      const interval = setInterval(() => {
        if (charIndex <= originalText.length) {
          el.textContent = originalText.substring(0, charIndex);
          charIndex++;
        } else {
          clearInterval(interval);
          resolve();
        }
      }, 70); // Velocidade entre letras
    });

    typingPromises.push(promise);
  });

  return Promise.all(typingPromises);
}

// === Player de Música ===
function toggleMusicPlayer() {
  const overlay = document.getElementById('musicPlayerOverlay');
  overlay.classList.toggle('active');

  if (overlay.classList.contains('active')) {
    loadTrack(currentTrackIndex);
  }
}

function loadTrack(index) {
  const track = musicList[index];
  if (!track) return;

  audioElement.src = track.src;
  musicTitle.textContent = `${track.title}`;
  audioElement.load();
}

function togglePlay() {
  if (audioElement.paused) {
    audioElement.play()
      .then(() => {
        document.querySelector('.music-controls button:nth-child(2)').textContent = "⏸️";
      })
      .catch(err => console.error("Erro ao tocar música:", err));
  } else {
    audioElement.pause();
    document.querySelector('.music-controls button:nth-child(2)').textContent = "▶️";
  }
}

function prevMusic() {
  currentTrackIndex = (currentTrackIndex - 1 + musicList.length) % musicList.length;
  loadTrack(currentTrackIndex);
  audioElement.play();
  document.querySelector('.music-controls button:nth-child(2)').textContent = "⏸️";
}

function nextMusic() {
  currentTrackIndex = (currentTrackIndex + 1) % musicList.length;
  loadTrack(currentTrackIndex);
  audioElement.play();
  document.querySelector('.music-controls button:nth-child(2)').textContent = "⏸️";
}

// === Background Dinâmico com Imagens Aleatórias ===
function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

function createRandomBackgroundImage() {
  const container = document.getElementById('background-images');
  if (!container) return;

  const wrapper = document.createElement('div');
  wrapper.classList.add('background-image');

  const randomLeft = getRandom(0, window.innerWidth - 200);
  const randomTop = getRandom(0, window.innerHeight - 200);

  wrapper.style.left = `${randomLeft}px`;
  wrapper.style.top = `${randomTop}px`;

  const rotation = getRandom(-1, 1);
  wrapper.style.transform = `rotate(${rotation}deg)`;

  const randomIndex = Math.floor(Math.random() * imageList.length);
  const img = document.createElement('img');
  img.src = imageList[randomIndex];
  img.alt = "Fundo decorativo";

  wrapper.appendChild(img);
  container.appendChild(wrapper);

  // Remove após a animação
  setTimeout(() => {
    wrapper.remove();
  }, 20000); // Dura 20 segundos
}

// === Funções do Projeto Finalizadas ===