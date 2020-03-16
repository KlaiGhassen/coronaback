const express = require('express');
const router = express.Router();
const queries = require('../db/queryTicket');
router.get('/', (req, res) => {
  queries.getAllTicket().then(ticket => {
    res.json(ticket);
  });
});
router.get('/stateAndCity', (req, res) => {
  let state = req.query.state;
  let city = req.query.city;
  queries.getAllTicketbyStateAndCity(city, state).then(ticket => {
    res.json(ticket);
  });
});
router.get('/:id', (req, res) => {
  queries.getOneTicket(req.params.id).then(ticket => {
    res.json(ticket);
  });
});
router.post('/ticket', (req, res) => {
  queries.addTicket(req.body).then(() => {
    res.json({
      inserted: true
    });
  });
});

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

module.exports = router;
