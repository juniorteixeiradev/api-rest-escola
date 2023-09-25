import express from 'express';
import conexao from '../lib/connection.js';
const app = express();

app.use(express.json());


app.get('/', (req, res)=>{
    conexao.query("SELECT * FROM alunos", (err, result, fields) =>{
    res.send(result);
})

})

//Lista todos os alunos
app.get('/alunos', (req, res)=>{
    res.send(alunos);
})

//Criar um valor no banco
app.post('/alunos', (req, res) =>{
const query = `INSERT INTO alunos (nome, idade, media, sexo) VALUES (?, ?, ?, ?)`;
const valores = [req.body.nome, req.body.idade, req.body.media, req.body.sexo];
conexao.query(query, valores, (err, result, fields) =>{
    if (err) throw err;
    else{
        res.send("Inseriu com sucesso!");
    }
})
});

//Rota para buscar alunos por id
app.get('/busca_alunos/:id', (req, res) => {
    const query = `SELECT * FROM alunos WHERE alunos.id = ? `;
    //o ? evita sql injection;
    const id = [req.params.id];
    conexao.query(query, id, (err, result, fields) =>{
        res.send(result);
    })
});

//atualizar dados segundo indice utilizando id para busca no nosso arra alunos 
app.put('/alunos/:id', (req,res) =>{
    const query = `UPDATE alunos SET nome = ?, idade = ?, sexo = ?, media = ? WHERE alunos.id = ?`;
    const valores = [req.body.nome, req.body.idade, req.body.sexo, req.body.media, req.params.id ];
    conexao.query(query, valores, (err, result, fields) =>{
        
        res.send(`O aluno com o id ${req.params.id} foi atualizado!`);
    })

})

//rota pra deletar elemento do array alunos por indice utilizando a busca por id
app.delete('/alunos/:id', (req,res) =>{
    const query = `DELETE FROM alunos WHERE id = ${req.params.id}`;
    conexao.query(query,(err, result, fields) =>{
        res.json(`${result} foi deletado`);
    })

});

//Rota para mostrar os alunos com as melhores medias
app.get('/melhores_alunos', (req,res) =>{
    res.send(melhoresMedia());
})

export default app;












