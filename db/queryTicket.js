const knex = require('./knex');
module.exports = {
  getAllTicket() {
    return knex('ticket');
  },
  getAllTicketbyStateAndCity(city, state) {
    return knex('ticket')
      .where('city', city)
      .andWhere('state', state);
  },
  addTicket(ticket) {
    return knex('ticket').insert(ticket, '*');
  },
  getOneTicket(id) {
    return knex('ticket').where('id', id);
  },
  updateStatus(id, status) {
    return knex('ticket')
      .where('id', id)
      .update('status', status);
  },
  updatePriority(id, priority) {
    return knex('ticket')
      .where('id', id)
      .update(priority);
  }
};
