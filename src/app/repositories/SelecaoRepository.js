import conexao from "../database/conexao.js";

class SelecaoRepository {
  //CRUD
  create(selecao) {
    const sql = "INSERT INTO selecoes SET ?;";
    return new Promise((resolve, reject) => {

        conexao.query(sql, selecao,(erro, result) => {
          if (erro) return reject("Não foi possível cadastrar"); 

          const selecoes = JSON.parse(JSON.stringify(result));
          return resolve(selecoes);

        });
      });
  }

  findAll() {
    const sql = "SELECT * FROM selecoes;";
    return new Promise((resolve, reject) => {
      conexao.query(sql, (erro, result) => {
        if (erro) return reject("Não foi possível localizar");

        const selecoes = JSON.parse(JSON.stringify(result));
        return resolve(selecoes);
      });
    });
  }

  findById(id) {
    const sql = "SELECT * FROM selecoes WHERE id=?;";
    return new Promise((resolve, reject) => {
      conexao.query(sql, id, (erro, result) => {
        if (erro) return reject("Não foi possível localizar");
        const selecoes = JSON.parse(JSON.stringify(result));
        return resolve(selecoes);
      });
    });
  }

  update(selecao, id) {
    const sql = "UPDATE selecoes SET ? WHERE id=?;";
    return new Promise((resolve, reject) => {
        conexao.query(sql, [selecao, id], (erro, result) => {
          if (erro) return reject("Não foi possível atualizar");
  
          const selecoes = JSON.parse(JSON.stringify(result));
          return resolve(selecoes);
        });
      });
  }

  delete(id) {
    const sql = "DELETE FROM selecoes WHERE id=?;";
    return new Promise((resolve, reject) => {
        conexao.query(sql, id, (erro, result) => {
          if (erro) return reject("Não foi possível deletar");
  
          const selecoes = JSON.parse(JSON.stringify(result));
          return resolve(selecoes);
        });
      });
  }
}

export default new SelecaoRepository();
