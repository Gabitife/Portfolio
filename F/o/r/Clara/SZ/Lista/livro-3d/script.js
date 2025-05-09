let currentPageGroup = 0;
const pages = document.querySelectorAll('.page');
const totalPages = pages.length;

function updateBookView(direction) {
  // Esconde todas as páginas e reseta conteúdo
  pages.forEach(p => {
    p.style.display = 'none';
    p.classList.remove('page--visible');
    const textElements = p.querySelectorAll('h1, p');
    textElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
    });
  });

  const page1 = pages[currentPageGroup * 2];
  const page2 = pages[currentPageGroup * 2 + 1];

  if (page1) {
    page1.style.display = 'flex';
    setTimeout(() => page1.classList.add('page--visible'), 100);
    applyTypingEffect(page1);
  }

  if (page2) {
    page2.style.display = 'flex';
    setTimeout(() => page2.classList.add('page--visible'), 100);
    applyTypingEffect(page2);
  }

  setTimeout(() => {
    pages.forEach(p => p.classList.remove('flip-left', 'flip-right'));
  }, 1000);

  updateCounter();
}

function updateCounter() {
  const displayedPages = Array.from(pages).filter(p => p.style.display !== 'none');
  const firstPage = parseInt(displayedPages[0].querySelector('h1')?.textContent.split(" ")[1] || 1);
  const lastPage = parseInt(displayedPages[displayedPages.length - 1].querySelector('h1')?.textContent.split(" ")[1] || 1);

  document.getElementById('pageCounter').textContent = `Páginas ${firstPage} - ${lastPage} / 10`;
}

function turnPage(direction) {
  const maxGroup = Math.floor((totalPages - 1) / 2);

  if (direction === 'next' && currentPageGroup < maxGroup) {
    currentPageGroup++;
    updateBookView('next');
  } else if (direction === 'prev' && currentPageGroup > 0) {
    currentPageGroup--;
    updateBookView('prev');
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

// Toggle dark mode
function toggleTheme() {
  document.body.classList.toggle('dark-mode');
}

// Aplica efeito de digitação letra por letra
function applyTypingEffect(pageElement) {
    const isLeftPage = pageElement.classList.contains("page--left");
    const isRightPage = pageElement.classList.contains("page--right");
  
    // Função interna para aplicar o efeito em um elemento específico
    function typeText(el, delayStart = 0) {
      const originalText = el.dataset.text || el.textContent.trim();
      el.dataset.text = originalText;
      el.textContent = "";
  
      let charIndex = 0;
      return new Promise((resolve) => {
        setTimeout(() => {
          const interval = setInterval(() => {
            if (charIndex <= originalText.length) {
              el.textContent = originalText.substring(0, charIndex);
              charIndex++;
            } else {
              clearInterval(interval);
              resolve();
            }
          }, 50); // Velocidade entre letras
        }, delayStart);
      });
    }
  
    // Aplica efeito nas páginas
    if (isLeftPage) {
      const leftTextElements = pageElement.querySelectorAll("h1, p");
      let totalDelay = 0;
  
      leftTextElements.forEach(async (el) => {
        await typeText(el, totalDelay);
        totalDelay += el.textContent.length * 50 + 2020; // Tempo baseado no tamanho do texto
      });
  
      // Se existir uma página à direita, aguarde antes de iniciar nela
      const nextPage = pages[currentPageGroup * 2 + 1];
      if (nextPage) {
        setTimeout(() => {
          applyTypingEffect(nextPage);
        }, totalDelay);
      }
    } else if (isRightPage) {
      const rightTextElements = pageElement.querySelectorAll("h1, p");
      let totalDelay = 0;
  
      rightTextElements.forEach(async (el) => {
        await typeText(el, totalDelay);
        totalDelay += el.textContent.length * 50 + 200;
      });
    }
  }

window.onload = () => {
  updateBookView();
};
