import express from 'express';
import AlunoController from './app/controllers/AlunoController.js';
const app = express();
app.use(express.json());

//Criar um valor no banco
app.post('/alunos', AlunoController.store);

//Lista todos os alunos
app.get('/alunos', AlunoController.index);

//Rota para buscar alunos por id
app.get('/busca_alunos/:id', AlunoController.show);

//atualizar dados segundo indice utilizando id para busca no nosso arra alunos 
app.put('/alunos/:id', AlunoController.update)

//rota pra deletar elemento do array alunos por indice utilizando a busca por id
app.delete('/alunos/:id', AlunoController.delete);

//Rota para mostrar os alunos com as melhores medias
app.get('/melhores_alunos', AlunoController.indexByMedia);

export default app;












