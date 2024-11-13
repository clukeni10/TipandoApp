

import { RegistroService } from './DAO.ts'; // Ensure the correct relative path to the DAO file

const botao = document.getElementById('botao');

if (botao) {
  botao.addEventListener('click', () => {
    // Captura os valores dos campos
    const nome = (document.getElementById('nome') as HTMLInputElement).value;
    const data = (document.getElementById('data') as HTMLInputElement).value;
    const image = document.getElementById('imageInput') as HTMLInputElement | null;

    // Verifica se os campos obrigatórios estão preenchidos
    if (!nome || !data) {
      alert('Por favor, preencha todos os campos!');
      return;
    }

    // Verifique se o elemento de imagem existe antes de acessar suas propriedades
    if (!image || !image.files) {
      alert('Por favor, selecione uma imagem!');
      return;
    }

    const file = image.files[0]; // Aqui você já pode acessar files de forma segura
    if (!file) {
      alert('Por favor, selecione uma imagem!');
      return;
    }

    const reader = new FileReader();
    reader.onload = function (e: ProgressEvent<FileReader>): void {
      // Cria uma instância do serviço RegistroService
      const registroService = new RegistroService();

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
} else {
  console.error("Elemento 'botao' não encontrado!");
}
