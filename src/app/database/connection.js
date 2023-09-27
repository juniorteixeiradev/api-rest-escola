import mysql from "mysql";

const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: '3307',
    password: 'root1234',
    database: 'apirest',
});

conexao.connect();
/**
 * 
 * @param {string} sql instrução sql a ser executada
 * @param {[valores, id]} valores um array que tem valores que serão passados por requisição na consulta, e um id pra filtrar
 * @param {string} msgErro erro pra ser exibido se a consulta nao tiver sucesso
 * @returns 
 */
export function consultaQuery (sql, valores='', msgErro){
    return new Promise((resolve, reject) =>{
        conexao
        .query(sql, valores, (err, result, fields) =>{
            //const row = JSON.parse(JSON.stringify(result));
            if(err) reject(msgErro);
            else return resolve(result);
    })
    });     
}

export default conexao;

