
exports.seed = function(knex) {
  return knex('table_name').insert([
    {ingredient: 'cereal', recipe_id: 1},
    {ingredient: 'milk', recipe_id: 1},
    {ingredient: 'water', recipe_id: 2},
    {ingredient: 'coldness', recipe_id: 2},
    {ingredient: 'cheese', recipe_id: 3},
    {ingredient: 'bread', recipe_id: 3},
    {ingredient: 'butter', recipe_id: 3},
  ]);
};
