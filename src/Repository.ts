import { replaceIconWithImage } from './ReplaceIcon.ts';

document.addEventListener('DOMContentLoaded', () => {
  const fileInput = document.getElementById('imageInput') as HTMLInputElement;

  if (fileInput) {
    // Adiciona o ouvinte de eventos 'change' programaticamente
    fileInput.addEventListener('change', (event) => {
      replaceIconWithImage(event); // Chama a função passando o evento
    });
  }
});


