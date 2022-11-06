require('dotenv').config()
const express = require('express')


const PORT = process.env.PORT || 5000

const app = express()

app.get('/api',(req,res)=>{
	
	try{
	console.log(req.query)
	return res.json({"a":2})
	}
	catch(e){
		console.log("ПОМИЛКА);
	}
})

const start = async ()=>{
	try{
	
		app.listen(PORT,()=>console.log('SERVER START PORT - '+PORT))
	}
	catch(e){
		console.log(e);
	}
}

start()

