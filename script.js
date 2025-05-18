const perguntas = document.querySelectorAll('.pergunta');

perguntas.forEach((pergunta, index) => {
    pergunta.addEventListener('click', () => {
        const seta = pergunta.querySelector('.seta');
        const resposta = pergunta.nextElementSibling;

        const aberta = resposta.style.display === 'block';
        resposta.style.display = aberta ? 'none' : 'block';
        seta.textContent = aberta ? '▼' : '▲';
    });
});