const {Type} = require('../models/models')
const ApiError = require('../error/ApiError')

class TypeController{

	async create(req,res){
		try{
			const {name} = req.body
			const type = await Type.create({name})
			return res.json(type)
		}catch(e){
			return res.status(401).json({message:"Такий запис вже є"})
		}
	}

	async getAll(req,res){
		const types = await Type.findAll();
		return res.json(types)
	}
	async remove(req,res){
		const {id} = req.query
		const types = await Type.destroy({where:{id}})

		if(!types){
				return res.status(401).json({message:"Не знайден запис"})
			}
			return res.json({message:"Запис видалений"})
	}

}

module.exports = new TypeController()