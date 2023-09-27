
import AlunoRepository from "../repositories/AlunoRepository.js";
class AlunoController {


    async index(req, res){
        const row = await AlunoRepository.findAll();
        res.json(row);
    }
    
    async indexByMedia(req, res){
        const row = await AlunoRepository.orderTheBest();
        res.json(row);
    }

    async show(req, res) {  
        const id = req.params.id;
        const row = await AlunoRepository.findById(id);
        res.status(202).json(row);
    }
    async store(req, res){
        const row = await AlunoRepository.create(req.body);
        res.status(201).json(row);
        }
    async update(req,res){
        const row = await AlunoRepository.update(req.body, req.params.id);
        res.status(201).json(row);
    
    }
    async delete(req,res){
        const row = await AlunoRepository.delete(req.params.id);
        res.status(201).json(row);
    }

}

//padrão singleton
export default new AlunoController();
