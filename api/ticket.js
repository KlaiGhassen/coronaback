const express = require('express');
const router = express.Router();
const queries = require('../db/queryTicket');
router.get('/', (req, res) => {
        queries.getAllTicket().then(tickets => {
            res.json(tickets)
        });
    }),
    router.get('/stateAndCity', (req, res) => {
        let state = req.query.state;
        let city = req.query.city;
        let type = req.query.type;
        queries.getAllTicketbyStateAndCity(city, state, type).then(tickets => {
            res.json(tickets)
        });
    });
router.get('/:id', (req, res) => {
    queries.getOneTicket(req.params.id).then(ticket => {
        res.json(ticket);
    });
});
router.post('/ticket', (req, res) => {
    queries.addTicket(req.body).then(ticket => {
        res.json(
            ticket
        );
    });
});

router.put('/ticket/:id', (req, res) => {
    queries.updateTicket(req.params.id, req.body).then(() => {
        res.json({
            updated: true
        })

    })
})
router.put('/status/:id', (req, res) => {
    queries.updateStatus(req.params.id, req.body).then(() => {
        res.json({
            updated: true
        });
    });
});
router.put('/priotity/:id', (req, res) => {
    queries.updatePriority(req.params.id, req.body).then(() => {
        res.json({
            updated: true
        });
    });
});

router.post('/aprovel', (req, res) => {
    queries.addAprovel(req.body).then(approvel => {
        res.json(approvel);
    });
});
router.put('/aprovel/:id', (req, res) => {
    queries.updateApprovel(req.params.id, req.body).then(() => {
        res.json({
            updated: true
        })

    })
});

module.exports = router;