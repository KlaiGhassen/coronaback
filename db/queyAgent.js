const knex = require('./knex');
module.exports = {
  addComment(commont) {
    return knex('agentComment').insert(commont, '*');
  },
  ticketUpdate(id, ticket) {
    return knex('ticket')
      .where('id', id)
      .update(ticket, '*');
  },
  getTicket(state, gov, type, priority) {
    return knex('ticket')
      .where('state', state)
      .andWhere('city', gov)
      .andWhere('type');
  }
};
