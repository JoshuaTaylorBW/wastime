exports.up = function(knex, Promise) {
  return knex.schema.createTable('time_waster', function(table) {
    table.increments('id');
    table.text('name');
    table.text('snapchat_username');
    table.text('snapchat_image');
    table.text('instagram_name');
    table.text('twitter_name');
    table.text('vine_name');
    table.text('img');
    table.text('description');
    table.text('submitted_by');
    table.text('person_type');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
