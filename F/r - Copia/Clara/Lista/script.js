function openOverlay(message) {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'flex'; // Exibe a sobreposição
    setTimeout(() => {
        overlay.classList.add('active');
    }, 10); // Atraso para permitir a transição
    document.getElementById('overlay-message').innerText = message;
}

function closeOverlay() {
    const overlay = document.getElementById('overlay');
    overlay.classList.remove('active');
    setTimeout(() => {
        overlay.style.display = 'none'; // Oculta a sobreposição após a animação
    }, 500); // Tempo para coincidir com a animação de fechamento
}









