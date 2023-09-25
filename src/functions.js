import conexao from "../lib/connection.js";
import { alunos } from "./app.js";

export function searchId(id) {
    return alunos.filter(aluno => aluno.id == id);
}
    //cada objeto do array alunos esta sendo chamado de -> aluno
    //aluno.id == id retorna o objeto que atenda a condição que o id do aluno seja igual do parametro passado
    //filtra o array de conforme uma condição 
    //compara e retorna do nosso objeto alunos compara os ids dos alunos com o id que esta sendo passado por parametro
export function buscaIndiceAlunos(id) {
    return alunos.findIndex(aluno => aluno.id == id);
}

export function melhoresMedia(){
    return alunos.sort((a,b) => b.media - a.media)
    //Função pra retornar um array ordenado conforme a media do maior para o menor 
}




