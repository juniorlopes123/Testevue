// scripts.js
document.querySelector('.add-button').addEventListener('click', function() {
    alert('Adicionar nova publicação!');
});

document.querySelectorAll('.publication-info button').forEach(button => {
    button.addEventListener('click', function() {
        alert('Negociar publicação!');
    });
});
