
document.querySelector('.enter').addEventListener('click', function() {
    document.getElementById('scrollBtn').style.display = 'block'; // Mostra o botão ao clicar
    document.querySelector('.navbar').style.display = 'block'; // Mostra a navbar ao clicar
});

// Adiciona suporte para toque em dispositivos móveis
document.querySelector('.enter').addEventListener('touchstart', function(event) {
    event.preventDefault(); // Previne o comportamento padrão
    document.getElementById('scrollBtn').style.display = 'block'; // Mostra o botão ao tocar
    document.querySelector('.navbar').style.display = 'block'; // Mostra a navbar ao tocar
});
