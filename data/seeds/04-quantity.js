
exports.seed = function(knex) {
  return knex('quantity').insert([
    {quantity: 'several', recipe_id: 1, ingredient_id: 1},
    {quantity: 'many', recipe_id: 1, ingredient_id: 2},
    {quantity: 'lots', recipe_id: 2, ingredient_id: 3},
    {quantity: 'a whole heap', recipe_id: 2, ingredient_id: 4},
    {quantity: 'tons', recipe_id: 3, ingredient_id: 5},
    {quantity: 'two', recipe_id: 3, ingredient_id: 6},
    {quantity: '14 pounds', recipe_id: 3, ingredient_id: 7},
  ]);
};
