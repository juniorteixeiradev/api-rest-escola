import conexao from "../database/connection.js";
class AlunoRepository {


    create(req){
        return new Promise((resolve, reject) =>{
            const query = `INSERT INTO alunos SET ?`;
            const valores = [req];
            conexao
            .query(query, valores, (err, result, fields) =>{
                //const row = JSON.parse(JSON.stringify(result));
                if(err) return reject("Promessa rejeitada");
                else return resolve(result)
        })
        })
    }

    findAll(){
        return new Promise((resolve, reject) =>{
            conexao
            .query("SELECT * FROM alunos", (err, result, fields) =>{
                //const row = JSON.parse(JSON.stringify(result));
                if(err) throw err;
                else return resolve(result);
        })
        });      
    }

    findById(idparams){
        return new Promise((resolve, reject) =>{
            const query = `SELECT * FROM alunos WHERE alunos.id = ? `;
            const id = [idparams];
            conexao
            .query(query, id, (err, result, fields) =>{
                //const row = JSON.parse(JSON.stringify(result));
                if(err) return reject("Promessa rejeitada");
                else return resolve(result)
        })
        })
    }

    update(req, id){
        return new Promise((resolve, reject) =>{
            const query = `UPDATE alunos SET ? WHERE alunos.id = ?`;
            const valores = [req, id];
            conexao
            .query(query, valores, (err, result, fields) =>{
                //const row = JSON.parse(JSON.stringify(result));
                if(err) return reject("Promessa rejeitada");
                else return resolve(result)
        })
        })

    }

    delete(idparams){
        return new Promise((resolve, reject) =>{
            const query = `DELETE FROM alunos WHERE id = ? `;
            const id = [idparams];
            conexao
            .query(query, id, (err, result, fields) =>{
                //const row = JSON.parse(JSON.stringify(result));
                if(err) return reject("Promessa rejeitada");
                else return resolve(result)
        })
        })
    }

}

export default new AlunoRepository();