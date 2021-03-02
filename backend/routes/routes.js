const express = require('express')
const { response } = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const SignUpInfo = require('../models/SignUpModels')

router.post('/signup', (request, response) => {
    const signedUpUser = new SignUpInfo({
        fullName:request.body.fullName,
        username:request.body.username,
        email:request.body.email,
        password:request.body.password,
    })
    signedUpUser.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
})

router.post('/signin', (request, response) => {
    const targetUsername = request.body.username
    const password = request.body.password

    SignUpInfo.findOne({username: targetUsername})
    .then(matchInfo => {
        if(matchInfo){
            let token = jwt.sign({userId: matchInfo.username, name: matchInfo.fullName}, 'verySecretValue', {expiresIn: '1h'})
            response.json({
                message: 'Login Successful',
                token: token
            })
        }
        else{
            result.json({
                message: 'No match'
            })
        }
    })
})

module.exports = router