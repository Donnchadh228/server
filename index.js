require('dotenv').config()

const express = require('express')
// const sequelize=require('./db.js')
// const models = require('./models/models.js')
// const cors = require('cors')
// const fileUpload = require('express-fileupload')
// const router = require('./router/index.js')
// const ErrorHandler = require('./middleware/ErrorHandllingMiddleware.js')
// const path = require('path')

const PORT = process.env.PORT || 5000

const app = express()
// app.use(cors())
// app.use(express.json())
// app.use(express.static(path.resolve(__dirname,'static')))
// app.use(fileUpload({}))
app.get('/api',(req,res)=>{
	
	try{
	console.log(req.query)
	return res.json({"a":2})
	}
	catch(e){
		console.log("ПОМИЛКА");
		return 0
	}
})

// Перевірка помилок, останій Middleware
// app.use(ErrorHandler)


const start = async ()=>{
	try{

		app.listen(PORT,()=>console.log('SERVER START PORT - '+PORT))
	}
	catch(e){
		console.log(e);
	}
}

start()

