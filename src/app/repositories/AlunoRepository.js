import { consultaQuery } from "../database/connection.js";
class AlunoRepository {


    create(req){
        const sql = `INSERT INTO alunos SET ?`;
        const valores = [req];
        return consultaQuery(sql, valores, "Não foi possivel cadastrar o aluno");
    }

    findAll(){   
        const sql = "SELECT * FROM alunos";
        return consultaQuery(sql);
    }

    orderTheBest(){
        const sql = "SELECT * FROM alunos ORDER BY media DESC";
        return consultaQuery(sql);
    }

    findById(idparams){
        const sql = `SELECT * FROM alunos WHERE alunos.id = ? `;
        const id = [idparams];
        return consultaQuery(sql, id, "Consulta Não retornou nenhum resultado com este id!");
    }

    update(req, id){
        const sql = `UPDATE alunos SET ? WHERE alunos.id = ?`;
        const valores = [req, id];
        return consultaQuery(sql, valores, "Consulta Não atualizou nenhum resultado com este id!");
    }

    delete(idparams){
        const sql = `DELETE FROM alunos WHERE id = ? `;
        const id = [idparams];
        return consultaQuery(sql, id, "Consulta Não deletou nenhum resultado com este id!");
    }

}

export default new AlunoRepository();