const {Brand} = require('../models/models')
const ApiError = require('../error/ApiError')


class BrandController{
	async create(req,res){
		try{
			const {name} = req.body
			const brand = await Brand.create({name})
			return res.json(brand)

		}catch(e){
			return res.status(401).json({message:"Такий запис вже є"})
		}
		
	
	}

	async getAll(req,res){
		const brand = await Brand.findAll();
		return res.json(brand)
	}

	async remove(req,res){
		const {id} = req.query
		const brands = await Brand.destroy({where:{id}})

		if(!brands){
				return res.status(401).json({message:"Не знайден запис"})
			}
			return res.json({message:"Запис видалений"})
	}
}

module.exports = new BrandController()