import express from 'express';
import conexao from '../infra/conexao.js';

const app = express();

//indicar para o expresse ler body com json
app.use(express.json());

//funções auxiliares
//busca seleção pelo id
const buscarSelecaoPorId = (id) => {
    return selecoes.filter(sel => sel.id == id);
}

//busca o indice ou posição do elemento no array por id
const buscarIndiceSelecao = (id) => {
    return selecoes.findIndex(sel => sel.id == id);
}

//rotas
app.get('/selecoes', (req, res) => {
    // res.status(200).send(selecoes);
    const sql = "SELECT * FROM selecoes;";
    conexao.query(sql, (erro, result) => {
        if(erro) {
            console.log(erro);
            res.status(404).json({
                "erro": erro
            })
        } else {
            res.status(200).json(result);
        }
    });
});

app.get('/selecoes/:id', (req, res) => {
    // res.json(buscarSelecaoPorId(req.params.id));
    const id = req.params.id;
    const sql = "SELECT * FROM selecoes WHERE id=?;";
    conexao.query(sql, id, (erro, result) => {
        const linha = result[0];
        if(erro) {
            console.log(erro);
            res.status(404).json({
                "erro": erro
            })
        } else {
            res.status(200).json(linha);
        }
    });
});

app.post('/selecoes', (req, res) => {
    // selecoes.push(req.body);
    // res.status(201).send('Seleção cadastrada com sucesso!');
    const selecao = req.body;
    const sql = "INSERT INTO selecoes SET ?;";
    conexao.query(sql, selecao, (erro, result) => {
        if(erro) {
            console.log(erro);
            res.status(400).json({
                "erro": erro
            })
        } else {
            res.status(201).json(result);
        }
    });
});

app.delete('/selecoes/:id', (req, res) => {
    // let index = buscarIndiceSelecao(req.params.id);
    // selecoes.splice(index, 1);
    // res.send(`Seleção com id: ${req.params} excluída com sucesso!`);
    const id = req.params.id;
    const sql = "DELETE FROM selecoes WHERE id=?;";
    conexao.query(sql, id, (erro, result) => {
        //refinar depois fazendo a validação para saber se o id existe
        if(erro) {
            console.log(erro);
            res.status(404).json({
                "erro": erro
            })
        } else {
            res.status(200).json(result);
        }
    });
});

app.put('/selecoes/:id', (req, res) => {
    // let index = buscarIndiceSelecao(req.params.id);
    // selecoes[index].selecao = req.body.selecao;
    // selecoes[index].grupo = req.body.grupo;
    // res.json(selecoes);
    const id = req.params.id;
    const selecao = req.body;
    const sql = "UPDATE selecoes SET ? WHERE id=?;";
    conexao.query(sql, [selecao, id], (erro, result) => {
        if(erro) {
            console.log(erro);
            res.status(400).json({
                "erro": erro
            })
        } else {
            res.status(200).json(result);
        }
    });
});

export default app;
