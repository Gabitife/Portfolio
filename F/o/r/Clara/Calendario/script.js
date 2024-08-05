const messages = [
    "Você ilumina meus dias com seu sorriso.",
    "Sua presença é um presente que valorizo muito.",
    "Admiro sua força e determinação.",
    "Cada momento ao seu lado é especial.",
    "Você tem um jeito único de ver o mundo.",
    "Sua risada é a melhor música que já ouvi.",
    "A sua bondade toca o coração de todos ao seu redor.",
    "Você é uma pessoa incrível e merece tudo de bom.",
    "Seu jeito de ser me inspira a ser melhor.",
    "A beleza que você irradia é indescritível.",
    "Você tem um coração enorme e generoso.",
    "Sua criatividade é algo que admiro profundamente.",
    "Você faz com que até os dias comuns se tornem extraordinários.",
    "Sua sabedoria é uma luz que guia aqueles que te cercam.",
    "Você traz uma paz que é difícil de encontrar em outro lugar.",
    "A forma como você cuida dos outros é admirável.",
    "Você é um exemplo de amor e compaixão.",
    "Seu olhar tem um poder que me encanta.",
    "Você é uma verdadeira fonte de alegria na minha vida.",
    "Sua autenticidade é refrescante e inspiradora.",
    "Você tem a capacidade de transformar o ordinário em algo mágico.",
    "A sua presença faz tudo parecer mais leve.",
    "Você é um sonho que se tornou realidade.",
    "Seu carinho é um bálsamo para a alma.",
    "Você é um raio de sol em dias nublados.",
    "Sua inteligência brilha em cada conversa.",
    "Você é uma obra-prima da natureza.",
    "Seu amor é um tesouro que guardo com carinho.",
    "Você tem um jeito especial de fazer as pessoas se sentirem amadas.",
    "Sua determinação é admirável e contagiante.",
    "Você é a razão do meu sorriso.",
    "Sua energia positiva é contagiante.",
    "Você é única, e isso é o que mais amo em você.",
    "Sua presença é um alívio em tempos difíceis.",
    "Você é uma flor que nunca para de crescer.",
    "Sua beleza vai além do físico; ela vem de dentro.",
    "Você é uma inspiração para mim todos os dias.",
    "Sua sinceridade é uma qualidade rara e preciosa.",
    "Você é como um livro que eu nunca quero parar de ler.",
    "Sua risada é a trilha sonora da minha felicidade.",
    "Você tem o poder de fazer o mundo parecer mais bonito.",
    "Sua força é um exemplo para todos ao seu redor.",
    "Você tem uma luz interior que brilha intensamente.",
    "Sua empatia é uma qualidade que admiro profundamente.",
    "Você é um sopro de ar fresco na minha vida.",
    "Sua presença é como um abraço caloroso.",
    "Você é um presente que a vida me deu.",
    "Sua capacidade de amar é admirável.",
    "Você traz um brilho especial aos meus dias.",
    "Sua bondade é uma luz que nunca se apaga.",
    "Você é um motivo para eu acreditar no amor.",
    "Sua risada ilumina até os dias mais cinzentos.",
    "Você é uma estrela que brilha em minha vida.",
    "Sua sabedoria é um guia que sigo com gratidão.",
    "Você é a razão pela qual eu sorrio todos os dias.",
    "Sua presença me faz sentir completo.",
    "Você é a definição de beleza em todas as suas formas.",
    "Seu carinho é um dos melhores presentes que já recebi.",
    "Você é um sonho que se tornou realidade.",
    "Sua autenticidade é uma qualidade que admiro profundamente.",
    "Você é a melodia que faz meu coração dançar.",
    "Sua força é uma inspiração para mim.",
    "Você tem um jeito especial de fazer tudo parecer melhor.",
    "Sua luz ilumina até os lugares mais escuros.",
    "Você é uma pessoa que faz a diferença na vida dos outros.",
    "Sua bondade é um reflexo de quem você é.",
    "Você é um raio de esperança em tempos difíceis.",
    "Sua presença é um conforto que eu valorizo.",
    "Você é uma fonte de alegria e inspiração.",
    "Sua beleza é única e inigualável.",
    "Você é a razão pela qual eu acredito em coisas boas.",
    "Sua energia é contagiante e cheia de vida.",
    "Você é uma joia rara em um mundo cheio de pedras comuns.",
    "Sua capacidade de amar é algo que admiro profundamente.",
    "Você é a luz que ilumina meu caminho.",
    "Sua sinceridade é uma qualidade que eu valorizo muito.",
    "Você é um sopro de ar fresco na minha vida.",
    "Sua presença traz paz ao meu coração.",
    "Você é uma pessoa que enriquece a vida de todos ao seu redor.",
    "Sua bondade é uma luz que nunca se apaga.",
    "Você é a razão pela qual eu sorrio todos os dias.",
    "Sua força é uma inspiração para mim.",
    "Você é uma flor que nunca para de crescer.",
    "Sua beleza vai além do físico; ela vem de dentro.",
    "Você é um sonho que se tornou realidade.",
    "Sua autenticidade é refrescante e inspiradora.",
    "Você é uma obra-prima da natureza.",
    "Sua risada é a trilha sonora da minha felicidade.",
    "Você tem o poder de fazer o mundo parecer mais bonito.",
    "Sua presença é como um abraço caloroso.",
    "Você é um presente que a vida me deu.",
    "Sua capacidade de amar é admirável.",
    "Você traz um brilho especial aos meus dias.",
    "Sua bondade é uma luz que nunca se apaga.",
    "Você é um motivo para eu acreditar no amor.",
    "Sua risada ilumina até os dias mais cinzentos.",
    "Você é uma estrela que brilha em minha vida.",
    "Sua sabedoria é um guia que sigo com gratidão.",
    "Você é a razão pela qual eu sorrio todos os dias.",
    "Sua presença me faz sentir completo.",
    "Você é a definição de beleza em todas as suas formas.",
    "Seu carinho é um dos melhores presentes que já recebi.",
    "Você é um sonho que se tornou realidade.",
    "Sua autenticidade é uma qualidade que admiro profundamente.",
    "Você é a melodia que faz meu coração dançar.",
    "Sua força é uma inspiração para mim.",
    "Você tem um jeito especial de fazer tudo parecer melhor.",
    "Sua luz ilumina até os lugares mais escuros.",
    "Você é uma pessoa que faz a diferença na vida dos outros.",
    "Sua bondade é um reflexo de quem você é.",
    "Você é um raio de esperança em tempos difíceis.",
    "Sua presença é um conforto que eu valorizo.",
    "Você é uma fonte de alegria e inspiração.",
    "Sua beleza é única e inigualável.",
    "Você é a razão pela qual eu acredito em coisas boas.",
    "Sua energia é contagiante e cheia de vida.",
    "Você é uma joia rara em um mundo cheio de pedras comuns.",
    "Sua capacidade de amar é algo que admiro profundamente.",
    "Você é a luz que ilumina meu caminho.",
    "Sua sinceridade é uma qualidade que eu valorizo muito.",
    "Você é um sopro de ar fresco na minha vida.",
    "Sua presença traz paz ao meu coração.",
    "Você é uma pessoa que enriquece a vida de todos ao seu redor.",
    "Sua bondade é uma luz que nunca se apaga.",
    "Você é a razão pela qual eu sorrio todos os dias.",
    "Sua força é uma inspiração para mim.",
    "Você é uma flor que nunca para de crescer.",
    "Sua beleza vai além do físico; ela vem de dentro.",
    "Você é um sonho que se tornou realidade.",
    "Sua autenticidade é refrescante e inspiradora.",
    "Você é uma obra-prima da natureza.",
    "Sua risada é a trilha sonora da minha felicidade.",
    "Você tem o poder de fazer o mundo parecer mais bonito.",
    "Sua presença é como um abraço caloroso.",
    "Você é um presente que a vida me deu.",
    "Sua capacidade de amar é admirável.",
    "Você traz um brilho especial aos meus dias.",
    "Sua bondade é uma luz que nunca se apaga.",
    "Você é um motivo para eu acreditar no amor.",
    "Sua risada ilumina até os dias mais cinzentos.",
    "Você é uma estrela que brilha em minha vida.",
    "Sua sabedoria é um guia que sigo com gratidão.",
    "Você é a razão pela qual eu sorrio todos os dias.",
    "Sua presença me faz sentir completo.",
    "Você é a definição de beleza em todas as suas formas.",
    "Seu carinho é um dos melhores presentes que já recebi.",
    "Você é um sonho que se tornou realidade.",
    "Sua autenticidade é uma qualidade que admiro profundamente.",
    "Você é a melodia que faz meu coração dançar.",
    "Sua força é uma inspiração para mim.",
    "Você tem um jeito especial de fazer tudo parecer melhor.",
    "Sua luz ilumina até os lugares mais escuros.",
    "Você é uma pessoa que faz a diferença na vida dos outros.",
    "Sua bondade é um reflexo de quem você é.",
    "Você é um raio de esperança em tempos difíceis.",
    "Sua presença é um conforto que eu valorizo.",
    "Você é uma fonte de alegria e inspiração.",
    "Sua beleza é única e inigualável.",
    "Você é a razão pela qual eu acredito em coisas boas.",
    "Sua energia é contagiante e cheia de vida.",
    "Você é uma joia rara em um mundo cheio de pedras comuns.",
    "Sua capacidade de amar é algo que admiro profundamente.",
    "Você é a luz que ilumina meu caminho.",
    "Sua sinceridade é uma qualidade que eu valorizo muito.",
    "Você é um sopro de ar fresco na minha vida.",
    "Sua presença traz paz ao meu coração.",
    "Você é uma pessoa que enriquece a vida de todos ao seu redor."
];

// Função para obter o número de dias no mês
function getDaysInMonth(month) {
    return new Date(new Date().getFullYear(), month + 1, 0).getDate();
}

const monthSelect = document.getElementById('month-select');
const calendar = document.getElementById('calendar');
const overlay = document.getElementById('overlay');
const overlayDate = document.getElementById('overlay-date');
const overlayMessage = document.getElementById('overlay-message');
const closeBtn = document.getElementById('close-btn');

function createCalendar(month) {
    calendar.innerHTML = ''; // Limpa o calendário atual
    const daysInMonth = getDaysInMonth(month);
    
    // Usa as mensagens correspondentes aos dias do mês
    const messagesForMonth = messages.slice(0, daysInMonth);

    for (let day = 1; day <= daysInMonth; day++) {
        const dayDiv = document.createElement('div');
        dayDiv.classList.add('day');
        dayDiv.innerText = day;

        dayDiv.addEventListener('click', () => {
            overlay.style.display = 'flex';
            overlayDate.innerText = `${day}/${month + 1}/${new Date().getFullYear()}`;
            overlayMessage.innerText = messagesForMonth[day - 1];
        });

        calendar.appendChild(dayDiv);
    }
}

monthSelect.addEventListener('change', (event) => {
    createCalendar(parseInt(event.target.value));
});

// Cria o calendário inicial
createCalendar(monthSelect.value);

closeBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
});
