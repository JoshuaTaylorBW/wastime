exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
    table.increments('id');
    table.text('first_name');
    table.text('last_name');
    table.text('description');
    table.text('vine');
    table.text('insta');
    table.text('twitter');
    table.text('snapchat');
    table.text('picture');
    table.text('username');
  })
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
