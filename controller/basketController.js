const uuid = require('uuid')
const path = require('path');
const {BasketDevice,Basket} = require('../models/models')
const ApiError = require('../error/ApiError')


class basketController{
	async add(req,res,next){
		try{

			let {basketId, deviceId} = req.query
			console.log(deviceId)
            const basket = await BasketDevice.create({basketId,deviceId});
			
			return res.json(basket)

		}catch(e){
			next(ApiError.badRequest(e.message))
		}

	}
	async remove(req,res,next){
		try{

			let {id} = req.query
            const basket = await BasketDevice.destroy({where:{id}});
			
			return res.json(basket)

		}catch(e){
			next(ApiError.badRequest(e.message))
		}

	}
	async getAll(req,res,next){
		try{

			let {basketId} = req.query
            const basket = await BasketDevice.findAll({where:{basketId}});
			
			return res.json(basket)

		}catch(e){
			next(ApiError.badRequest(e.message))
		}

	}
	async getBasket(req,res,next){
		try{

			let {userId} = req.query
            const basket = await Basket.findOne({where:{userId}});
			
			return res.json(basket)

		}catch(e){
			next(ApiError.badRequest(e.message))
		}

	}
}

module.exports = new basketController()