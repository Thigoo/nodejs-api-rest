import SelecaoRepository from '../repositories/SelecaoRepository.js';

class SelecaoControler {

    async index(req, res) {
        const linha = await SelecaoRepository.findAll();
        res.json(linha);
    }

    async show(req, res) {
        const id = req.params.id;
        const linha = await SelecaoRepository.findById(id);
        res.json(linha);
    }

    async store(req, res) {
        const selecao = req.body;
        const linha = await SelecaoRepository.create(selecao);
        res.json(linha);    
    }

    async update(req, res) {
        const id = req.params.id;
        const selecao = req.body;
        const linha = await SelecaoRepository.update(selecao, id);
        res.json(linha);
    }

    async delete(req, res) {
        const id = req.params.id;
        const linha = await SelecaoRepository.delete(id);
        res.json(linha);
    }

}

//padrão Singleton
export default new SelecaoControler();
