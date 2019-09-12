
exports.seed = function(knex) {
  return knex('recipes').insert([
    {recipe_name: 'Cereal and Milk'},
    {recipe_name: 'Ice'},
    {recipe_name: 'Grilled Cheese Sandwich'}
  ]);
};
