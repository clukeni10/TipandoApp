
import { RegistroService } from './DAO.ts'; // Ensure the correct relative path to the DAO file

class Conta {
  private nome: string;
  private saldo: number;

  constructor(nome: string, saldoInicial: number = 0) {
      this.nome = nome;
      this.saldo = saldoInicial;
  }

  adicionarDinheiro(valor: number): void {
      if (valor <= 0) {
          console.log("Valor inválido. Insira um valor maior que zero.");
          return;
      }
      this.saldo += valor;
      console.log(`Depósito de ${valor.toFixed(2)} realizado com sucesso!`);
      console.log(`Saldo atual: ${this.saldo.toFixed(2)}`);
  }

  exibirSaldo(): void {
      console.log(`Saldo da conta de ${this.nome}: ${this.saldo.toFixed(2)}`);
  }
}


const botao = document.getElementById('botao');

if (botao) {
  botao.addEventListener('click', () => {
    // Captura os valores dos campos
    const nome = (document.getElementById('nome') as HTMLInputElement).value;
    const valor = (document.getElementById('dinheiro') as HTMLInputElement).value;
    const image = document.getElementById('imageInput') as HTMLInputElement | null;

    // Verifica se os campos obrigatórios estão preenchidos
    if (!nome || !valor) {
      alert('Por favor, preencha todos os campos!');
      return;
    }

    // Verifique se o elemento de imagem existe antes de acessar suas propriedades
    if (!image || !image.files) {
      alert('Por favor, selecione uma imagem!');
      return;
    }

    const minhaConta = new Conta(nome, parseFloat(valor));
    minhaConta.adicionarDinheiro(parseFloat(valor));
    

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
        registroService.register(nome, valor, imagem);

        // Exibe mensagem de sucesso após salvar os dados
        console.log('Dados salvos com sucesso!');
      }
    };

    reader.readAsDataURL(file); // Lê o arquivo de imagem como uma URL base64
  });
} else {
  console.error("Elemento 'botao' não encontrado!");
}
window.location.href = "../produtos.html";
