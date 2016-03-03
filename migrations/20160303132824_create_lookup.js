exports.up = function(knex, Promise) {
  return knex.schema.createTable('time_waster', function(table) {
    table.increments('id');
    table.text('submitted_by');
    table.text('id_of_submitted');
});
};

exports.down = function(knex, Promise) {

};
