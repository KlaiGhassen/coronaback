const express = require('express');
const router = express.Router();
const queries = require('../db/queyAgent');

router.post('/', (req, res) => {
  queries.addComment(req.body).then(() => {
    res.json({
      inserted: true
    });
  });
});
router.put('/:id', (req, res) => {
  queries.ticketUpdate(req.params.id, req.body).then(ticket => {
    res.json(ticket);
  });
});
router.get('/ticket', (req, res) => {
  let state = req.query.state;
  let gov = req.query.city;
  let type = req.query.type;
  let priority = req.query.priority;
  queries
    .getTicket(req.body, state, gov, type, priority)
    .then(ticket => {
      res.json(ticket);
    })
    .catch(err =>
      res.json({
        'message :': err
      })
    );
});

module.exports = router;
