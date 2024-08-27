document.querySelector('.enter').addEventListener('click', function() {
    document.getElementById('scrollBtn').style.display = 'block'; // Mostra o botão ao clicar
    document.querySelector('.navbar').style.display = 'block'; // Mostra a navbar ao clicar
});


// Adiciona eventos de clique e toque
enterButton.addEventListener('click', showElements);
enterButton.addEventListener('touchstart', showElements);