const express = require('express')
const main = require('./main')
const api = express.Router()

api.use('/api',main)


module.exports = api

