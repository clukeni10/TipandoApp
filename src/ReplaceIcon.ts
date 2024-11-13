export function replaceIconWithImage(event: Event): void {
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