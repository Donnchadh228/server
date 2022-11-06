require('dotenv').config()
const express = require('express')
const sequelize=require('./db.js')
const models = require('./models/models.js')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require('./router/index.js')
const ErrorHandler = require('./middleware/ErrorHandllingMiddleware.js')
const path = require('path')

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname,'static')))
app.use(fileUpload({}))
app.use('/api',router)

// Перевірка помилок, останій Middleware
app.use(ErrorHandler)


const start = async ()=>{
	try{

		await sequelize.authenticate()
		await sequelize.sync()
		app.listen(PORT,()=>console.log('SERVER START PORT - '+PORT))
	}
	catch(e){
		console.log(e);
	}
}

start()

