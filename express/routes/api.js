const express = require('express')
const router = express.Router()
const jwt = require("jsonwebtoken")
const fs = require('fs')
const User = require( '../models/user');

const  mongoose = require('mongoose')


mongoose.connect('mongodb://localhost:27017/', {
    dbName: 'event_db',
    useNewUrlParser: true,
    useUnifiedTopology: true 
}, err => err ? console.log(err) : console.log('Connected to database'));


function verifyToken(req,res,next){

	if(!req.headers.authorization){
		console.log("1")
		res.status(401).send("Unauthroized request")
	}

	let token = req.headers.authorization.split(' ')[1]
	if(token === null){
		console.log("2")
		res.status(401).send("Unauthroized request")
	}
		let payload = jwt.verify(token, 'secret')
		if(!payload){
			console.log("3")
		res.status(401).send("Unauthroized request")
	}
	req.userId = payload.subject
	next()
}

router.get('/' , (req,res)=>{
	res.send("hello from api route")

})

router.post('/register' , (req,res)=>{
	let userData = req.body
	let user = new User(userData)
	user.save((error,registeredUser)=>{
		if (error){
			console.log(error);
		}else{
			let payload = {subject : user._id}
			let token = jwt.sign(payload, 'secret')

			res.status(200).send({token})
		}
	})

})


router.post('/login' , (req,res)=>{
	let userData = req.body
	User.findOne({email: userData.email},(error , user)=>{
		if(error){
			console.log(error);
		}else{
			if(!user){
				res.status(401).send("User not found")
			}else{
				if(user.password !== userData.password){

					res.status(401).send("wrong cred")
				}else{
					let payload =  {subject: user._id}
					let token = jwt.sign(payload,'secret')
					res.status(200).send({token} )
				}
	}

		}}
)
	
})

router.get('/players', verifyToken, (req,res)=>{


let data = fs.readFileSync('players.json');
let jsonData = JSON.parse(data)

	res.json(jsonData)
})


module.exports = router 