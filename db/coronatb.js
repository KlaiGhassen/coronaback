var knex = require('knex')({
  client: 'postgresql',
  connection: 'postgres://postgres:ghassen@127.0.0.1:5432/corona'
});
function addCorona() {
  return knex.schema
    .createTable('ticket', table => {
      table.increments('id').primary();
      table.text('title');
      table.text('description');
      table.text('state');
      table.text('city');
      table.text('locationDescription');
      table.float('locationLatitude');
      table.float('locationLantitude');
      table.integer('status');
      table.integer('priority');
      table.integer('type');
      table.text('solutionTitle');
      table.text('solutionDescription');
      table.timestamp('solutionTime');
      table.text('media');
      table.timestamp('dueDate');
      table.text('tel');
      table.text('cin');
      table.text('email');
      table.integer('ownerId');
      table.foreign('ownerId').references('account');
    })
    .then(() => {
      return knex.schema.createTable('administrator', table => {
        table.increments('id').primary();
        table.text('password');
        table.text('username');
        table.text('nom');
        table.text('prenom');
        table.text('cin');
      });
    })
    .then(() => {
      return knex.schema.createTable('approval', table => {
        table.increments('id').primary();
        table.text('description');
        table.text('tel');
        table.text('cin');
        table.text('email');
      });
    })
    .then(() => {
      return knex.schema.createTable('account', table => {
        table.increments('id').primary();
        table.text('username');
        table.text('nom');
        table.text('prenom');
        table.text('createdBy');
        table.timestamp('createdAt');
        table.text('cin');
        table.integer('createdById');
        table.foreign('createdById').references('administrator');
      });
    })
    .then(() => {
      return knex.schema.createTable('agentComment', table => {
        table.increments('id').primary();
        table.text('description');
        table.integer('agentId');
        table.foreign('agentId').references('account');
        table.integer('ticketId');
        table.foreign('ticketId').references('ticket');
      });
    });
}

addCorona().then(() => {
  console.log('tables created');
});
