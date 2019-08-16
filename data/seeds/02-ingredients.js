
exports.seed = function(knex) {
  return knex('ingredients').insert([
    {ingredient: 'cereal'},
    {ingredient: 'milk'},
    {ingredient: 'water'},
    {ingredient: 'coldness'},
    {ingredient: 'cheese'},
    {ingredient: 'bread'},
    {ingredient: 'butter'},
  ]);
};
