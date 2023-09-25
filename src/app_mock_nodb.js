import express from 'express';
import { searchId, buscaIndiceAlunos, melhoresMedia } from './functions.js';
import conexao from '../lib/connection.js';
const app = express();

app.use(express.json());
//EXPRESS ENTENDA FORMATOS JSON
//mock
export const alunos = [
    { id:1, nome: 'Aluno 0', idade: 27, sexo: 'M', media: 9 },
    { id:2, nome: 'Aluno 1', idade: 27, sexo: 'M', media: 5 },
    { id:3, nome: 'Aluno 2', idade: 27, sexo: 'M', media: 10 }
];

//requisição que retorna uma response, estrtutura de rotas, padrão do express 
app.get('/', (req, res)=>{

    res.send('Olá mundo3aaa br!!');
})

//Lista todos os alunos
app.get('/alunos', (req, res)=>{
    res.send(alunos);
})

//Criar um valor no banco
app.post('/alunos', (req, res) =>{
    alunos.push(req.body);
    //preenche o array com o dado via post req.body quer dizer com o corpo da requisição
    res.status(201).send('Cadastrado com sucesso!');
});

//Rota para buscar alunos por id
app.get('/busca_alunos/:id', (req, res) => {
    res.json(searchId(req.params.id));
});

//atualizar dados segundo indice utilizando id para busca no nosso arra alunos 
app.put('/alunos/:id', (req,res) =>{
    let index = buscaIndiceAlunos(req.params.id);
    alunos[index].nome  = req.body.nome;
    alunos[index].idade = req.body.idade;
    alunos[index].media = req.body.media;
    // Entenda .nome desse lado <- é a propriedade nome do objeto alunos
    // .nome depois do = é o campo que vai ser passado via requisição no formato json
    // o valor do json vai preencher a propriedade nome de um determinado objeto do array conforme a busca por id!
    res.json(alunos);

    res.send(`O aluno de indice ${index} foi excluido`);

})

//rota pra deletar elemento do array alunos por indice utilizando a busca por id
app.delete('/alunos/:id', (req,res) =>{
    let index = buscaIndiceAlunos(req.params.id);
    console.log(index);
    alunos.splice(index, 1);
    res.send(`O aluno de indice ${index} foi excluido`);

});

//Rota para mostrar os alunos com as melhores medias
app.get('/melhores_alunos', (req,res) =>{
    res.send(melhoresMedia());
})

export default app;












