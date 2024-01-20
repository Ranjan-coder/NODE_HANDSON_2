const express = require('express')
const main = express.Router()

main.get('/main',(req,res)=>{
    res.send('Express : Creating APIs by just using pure Node.JS will become difficult if your application will grow which will happen eventually, this is the reason why we use this framework . With a myriad of HTTP utility methods and middleware at your disposal, creating a robust API is quick and easy.Express provides a thin layer of fundamental web application features, without obscuring Node.js features that you know and love.Many popular companies are using Express in their application.')
})

module.exports = main