import express from 'express';

const app = express();

//indicar para o expresse ler body com json
app.use(express.json());

//mock
const selecoes = [
    {id: 1, selecao: 'Brasil', grupo: 'G'},
    {id: 2, selecao: 'Suíça', grupo: 'G'},
    {id: 3, selecao: 'Sérvia', grupo: 'G'},
    {id: 4, selecao: 'Camarões', grupo: 'G'},
]

//funções auxiliares
//busca seleção pelo id
const buscarSelecaoPorId = (id) => {
    return selecoes.filter(sel => sel.id == id);
}

//busca o indice ou posição do elemento no array por id
const buscarIndiceSelecao = (id) => {
    return selecoes.findIndex(sel => sel.id == id);
}

//criar rota padrão ou  raiz
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/selecoes', (req, res) => {
    res.status(200).send(selecoes);
});

app.get('/selecoes/:id', (req, res) => {
    res.json(buscarSelecaoPorId(req.params.id));
});

app.post('/selecoes', (req, res) => {
    selecoes.push(req.body);
    res.status(201).send('Seleção cadastrada com sucesso!');
});

app.delete('/selecoes/:id', (req, res) => {
    let index = buscarIndiceSelecao(req.params.id);
    selecoes.splice(index, 1);
    res.send(`Seleção com id: ${req.params.id} excluída com sucesso!`);
});

export default app;
