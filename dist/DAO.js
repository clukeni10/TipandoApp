export class RegistroService {
    register(nome, data, imagem) {
        // Recupera os registros existentes do localStorage ou cria um array vazio
        let registros = JSON.parse(localStorage.getItem('registros') || '[]');
        // Cria um novo registro
        const novoRegistro = { nome, data, imagem };
        // Adiciona o novo registro
        registros.push(novoRegistro);
        // Salva os registros de volta no localStorage
        localStorage.setItem('registros', JSON.stringify(registros));
        console.log('Dados salvos com sucesso!');
    }
}
