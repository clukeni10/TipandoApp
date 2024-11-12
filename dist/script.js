"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Repository_1 = require("./Repository");
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
            // Cria uma instância do serviço RegistroService
            const registroService = new Repository_1.RegistroService();
            // Chama o método de salvar, passando os dados
            if (typeof e.target?.result === 'string') {
                const imagem = e.target.result; // Imagem em base64
                registroService.register(nome, data, imagem);
                // Exibe mensagem de sucesso após salvar os dados
                console.log('Dados salvos com sucesso!');
            }
        };
        reader.readAsDataURL(file); // Lê o arquivo de imagem como uma URL base64
    });
}
else {
    console.error("Elemento 'botao' não encontrado!");
}
