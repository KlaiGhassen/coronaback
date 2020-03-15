const express = require('express');
const router = express.Router();
const queries = require('../db/queryTicket');
router.get('/', (req, res) => {
  queries.getAllTicket().then(ticket => {
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

module.exports = router;
