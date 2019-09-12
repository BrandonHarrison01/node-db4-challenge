const express = require('express')

const server = express();

const RecipeRouter = require('./routes/recipe-router')

server.use('/api/recipes', RecipeRouter)

server.get('/', (req, res) => {
    res.status(200).json({ message: 'success' })
})

module.exports = server;