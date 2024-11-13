export function replaceIconWithImage(event) {
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
