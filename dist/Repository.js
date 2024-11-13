import { replaceIconWithImage } from "./ReplaceIcon.js";
document.addEventListener("DOMContentLoaded", () => {
  const fileInput = document.getElementById("imageInput");
  if (fileInput) {
    // Adiciona o ouvinte de eventos 'change' programaticamente
    fileInput.addEventListener("change", (event) => {
      replaceIconWithImage(event); // Chama a função passando o evento
    });
  }
});
