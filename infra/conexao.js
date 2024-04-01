import mysql from 'mysql';

const conexao = mysql.createConnection({
    hots: 'localhost',
    port: '3306',
    user: 'root',
    password: '123456',
    database: 'dbcopa'
});

export default conexao;