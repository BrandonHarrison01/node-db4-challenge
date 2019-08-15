
exports.seed = function(knex) {
  return knex('ingredients').insert([
    {ingredient: 'cereal', quantity: 'several', recipe_id: 1},
    {ingredient: 'milk', quantity: 'many', recipe_id: 1},
    {ingredient: 'water', quantity: 'lots', recipe_id: 2},
    {ingredient: 'coldness', quantity: 'a whole heap', recipe_id: 2},
    {ingredient: 'cheese', quantity: 'tons', recipe_id: 3},
    {ingredient: 'bread', quantity: 'two', recipe_id: 3},
    {ingredient: 'butter', quantity: '14 pounds', recipe_id: 3},
  ]);
};
