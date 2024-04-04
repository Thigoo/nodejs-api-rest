import mysql from 'mysql';

const conexao = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '123456',
    database: 'dbcopa'
});

conexao.connect();

/**
 * Executa um código sql com ou sem valores
 * @param {string} sql instrução sql a ser executada
 * @param {stringId | [selecao, id]} valores a serem passados para o sql 
 * @param {string} mensagemReject mensagem a ser exibida
 * @returns objeto da Promise
 */
export const consulta = (sql, valores = '', mensagemReJect) => {
    return new Promise((resolve, reject) => {

        conexao.query(sql, valores,(erro, result) => {
          if (erro) return reject(mensagemReJect); 

          const selecoes = JSON.parse(JSON.stringify(result));
          return resolve(selecoes);

        });
      });
}

export default conexao;