exports.up = function(knex, Promise) {
  return knex.schema.createTable('posted_by', function(table) {
    table.increments('id');
    table.text('submitted_by');
    table.text('id_of_submitted');
});
};

exports.down = function(knex, Promise) {

};
