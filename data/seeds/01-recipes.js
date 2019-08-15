
exports.seed = function(knex) {
  return knex('recipes').insert([
    {recipeName: 'Cereal and Milk'},
    {recipeName: 'Ice'},
    {recipeName: 'Grilled Cheese Sandwich'}
  ]);
};
