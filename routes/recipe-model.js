const db = require('../data/db-config.js');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions,
    getRecipeId
}

function getRecipes() {
    return db('recipes');
}

function getShoppingList(recipe_id) {
    return db('ingredients as i')
        .innerJoin('quantity as q', 'q.ingredient_id', '=', 'i.id')
        .select('i.ingredient', 'q.quantity')
        .where({ recipe_id })
}

function getInstructions(recipe_id) {
    return db('instructions')
        .where({ recipe_id })
}

function getRecipeId(recipe_id) {
    return db('recipes')
        .where({ recipe_id })
}