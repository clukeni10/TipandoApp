import { Registro } from "./DAO";

export class RegistroService implements Registro{
    register(nome: string,data: string, imagem: string):void{

        let registro = JSON.parse(localStorage.getItem('registros') || '[]');

        const novoRegistro = { nome, data, imagem };

        registro.push(novoRegistro);

        // Salva de volta no localStorage
        localStorage.setItem('registros', JSON.stringify(registro));

        console.log('Dados salvos com sucesso!');
    }

}