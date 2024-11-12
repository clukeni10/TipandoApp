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
          // Cria um objeto com nome, data e imagem
          const novoRegistro = {
            nome,
            data,
            imagem: e.target?.result as string, // A imagem será convertida para string (Base64)
          };
      
          // Recupera os dados existentes no localStorage ou cria um array vazio
          let registros: { nome: string, data: string, imagem: string }[] = JSON.parse(localStorage.getItem('registros') || '[]');
          
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