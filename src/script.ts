import { Registro } from "./DAO";
import { RegistroService } from "./Repository";

function replaceIconWithImage(event: Event): void {
    const target = event.target as HTMLInputElement;
    const file = target.files ? target.files[0] : null;
    const iconContainer = document.getElementById('imageIcon') as HTMLElement;
  
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e: ProgressEvent<FileReader>): void {
        // Limpa o conteúdo atual (ícone de câmera)
        iconContainer.innerHTML = '';
  
        // Cria um elemento de imagem e o insere no container
        const img = document.createElement('img');
        img.src = e.target?.result as string;
        iconContainer.appendChild(img);
      };
      reader.readAsDataURL(file);
    }
  }
  
  const save = document.getElementById('botao') as HTMLButtonElement;
  
  if (save) {
   save.addEventListener('click', () => {
  // Captura os valores dos campos
  const nome = (document.getElementById('nome') as HTMLInputElement).value;
  const data = (document.getElementById('data') as HTMLInputElement).value;
  const imageInput = document.getElementById('imageInput') as HTMLInputElement;

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