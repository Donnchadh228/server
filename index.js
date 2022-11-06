require('dotenv').config()
const express = require('express')


const PORT = process.env.PORT || 5000

const app = express()

app.get('/',(req,res)=>{
	console.log(req.query)
	return 0;
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

