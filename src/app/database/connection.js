import mysql from "mysql";

const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: '3307',
    password: 'root1234',
    database: 'apirest',
});

conexao.connect();

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

