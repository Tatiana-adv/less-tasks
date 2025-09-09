// Arquivo: js/main.js

document.addEventListener('DOMContentLoaded', () => {
    console.log('O JavaScript está funcionando! O DOM foi completamente carregado.');

    const botao = document.querySelector('.botao-principal');
    if (botao) {
        botao.addEventListener('click', (event) => {
            event.preventDefault(); // Impede a navegação da página
            alert('Você clicou no botão principal!');
        });
    }
});
