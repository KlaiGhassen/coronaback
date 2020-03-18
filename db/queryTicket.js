const knex = require('./knex');
module.exports = {
    getAllTicket() {
        return knex('ticket');
    },
    getAllTicketbyStateAndCity(city, state, type) {
        return knex('ticket')
            .where('city', city)
            .andWhere('state', state)
            .andWhere('type', type)
            .leftJoin('approval', 'ticket.id', '=', 'approval.ticketId')
            .select(knex.raw('ticket.*'), knex.raw('count(approval.id)'))
            .groupBy('ticket.id')


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
    },

    addAprovel(aprovel) {
        return knex('approval').insert(aprovel, '*');
    },
    updateApprovel(id, approval) {

        return knex('approval')
            .where('id', id)
            .update(approval);
    },
    updateTicket(id, ticket) {
        return knex('ticket')
            .where('id', id)
            .update(ticket);

    }
};