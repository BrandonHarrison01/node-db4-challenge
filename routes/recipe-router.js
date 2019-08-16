const express = require('express');

const recipeModel = require('./recipe-model');

const router = express.Router();

router.get('/', (req, res) => {
    recipeModel
        .getRecipes()
        .then(result => res.status(200).json(result))
        .catch(error => res.status(500).json({ error: 'there was one' }))
})

router.get('/:id/shopping-list', (req, res) => {
    const id = req.params.id

    recipeModel
        .getShoppingList(id)
        .then(result => res.status(200).json(result))
        .catch(error => res.status(500).json({ error: 'there was one' }))
})

router.get('/:id/instructions', (req, res) => {
    const id = req.params.id

    recipeModel
        .getInstructions(id)
        .then(result => res.status(200).json(result))
        .catch(error => res.status(500).json({ error: 'there was one' }))
})

router.get('/:id/get-all', async (req, res) => {
    const id = req.params.id
    const ing = recipeModel.getShoppingList(id)
    const ins = recipeModel.getInstructions(id)
    
    recipeModel
        .getRecipeId(id)
        .then(result => res.status(200).json({ ...result, ingredients: ing, instructions: ins }))
        .catch(error => res.status(500).json({ error: 'there was one' }))
})

module.exports = router