const knex = require('./knex');
module.exports = {
  getAllTicket() {
    return knex('ticket');
  },
  addTicket(ticket) {
    return knex('ticket').insert(ticket, '*');
  },
  getOneTicket(id) {
    return knex('ticket').where('id', id);
  }
};
