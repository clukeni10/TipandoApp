"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroService = void 0;
class RegistroService {
    register(nome, data, imagem) {
        let registro = JSON.parse(localStorage.getItem('registros') || '[]');
        const novoRegistro = { nome, data, imagem };
        registro.push(novoRegistro);
        // Salva de volta no localStorage
        localStorage.setItem('registros', JSON.stringify(registro));
        console.log('Dados salvos com sucesso!');
    }
}
exports.RegistroService = RegistroService;
