const express = require('express');
const api = require('./Router/api');
const app = express()

app.use('/route',api)


app.listen(5555,()=>{
    console.log('Server is running');
})