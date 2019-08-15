
exports.seed = function(knex) {
  return knex('table_name').insert([
    {instructions: 'pour cereal in a bowl', recipe_id: 1},
    {instructions: 'pour milk on top of cereal', recipe_id: 1},
    {instructions: 'place water in coldness', recipe_id: 2},
    {instructions: 'spread butter on breads', recipe_id: 3},
    {instructions: 'put cheese between breads', recipe_id: 3},
    {instructions: 'grill it', recipe_id: 3},
  ]);
};
