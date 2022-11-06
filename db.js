const {Sequelize} = require('sequelize')


module.exports = new Sequelize(
	process.env.DB_DATABASE, 
	process.env.DB_USER,
	process.env.DB_PASSWORD,
	{
	dialect:'mysql',
	host:process.env.DB_HOST
})
