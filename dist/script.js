"use strict";
function replaceIconWithImage(event) {
    const target = event.target;
    const file = target.files ? target.files[0] : null;
    const iconContainer = document.getElementById('imageIcon');
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            // Limpa o conteúdo atual (ícone de câmera)
            iconContainer.innerHTML = '';
            // Cria um elemento de imagem e o insere no container
            const img = document.createElement('img');
            img.src = e.target?.result;
            iconContainer.appendChild(img);
        };
        reader.readAsDataURL(file);
    }
}
const save = document.getElementById('botao');
if (save) {
    save.addEventListener('click', () => {
        // Captura os valores dos campos
        const nome = document.getElementById('nome').value;
        const data = document.getElementById('data').value;
        const imageInput = document.getElementById('imageInput');
        // Verifica se os campos obrigatórios estão preenchidos
        if (!nome || !data) {
            alert('Por favor, preencha todos os campos!');
            return;
        }
        // Salva os dados no localStorage
        const file = imageInput.files ? imageInput.files[0] : null;
        if (!file) {
            alert('Por favor, selecione uma imagem!');
            return;
        }
        const reader = new FileReader();
        reader.onload = function (e) {
            // Cria um objeto com nome, data e imagem
            const novoRegistro = {
                nome,
                data,
                imagem: e.target?.result, // A imagem será convertida para string (Base64)
            };
            // Recupera os dados existentes no localStorage ou cria um array vazio
            let registros = JSON.parse(localStorage.getItem('registros') || '[]');
            // Adiciona o novo registro ao array
            registros.push(novoRegistro);
            // Salva o array de registros no localStorage
            localStorage.setItem('registros', JSON.stringify(registros));
            // Exibe mensagem de sucesso após salvar todos os dados
            console.log('Dados salvos com sucesso!');
        };
        reader.readAsDataURL(file);
    });
}
