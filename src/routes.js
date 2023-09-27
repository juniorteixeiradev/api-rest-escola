import { Router } from "express";
import AlunoController from "./app/controllers/AlunoController.js";
const router = Router();

//Criar um valor no banco
router.post('/alunos', AlunoController.store);

//Lista todos os alunos
router.get('/alunos', AlunoController.index);

//Rota para buscar alunos por id
router.get('/busca_alunos/:id', AlunoController.show);

//atualizar dados segundo indice utilizando id para busca no nosso arra alunos 
router.put('/alunos/:id', AlunoController.update)

//rota pra deletar elemento do array alunos por indice utilizando a busca por id
router.delete('/alunos/:id', AlunoController.delete);

//Rota para mostrar os alunos com as melhores medias
router.get('/melhores_alunos', AlunoController.indexByMedia);

export default router;