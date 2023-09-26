import mysql from "mysql";

const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: '3307',
    password: 'root1234',
    database: 'apirest',
});


export default conexao;

