const { Router } = require('express');
const Event = require('../models/Event');

module.exports = Router()
  .post('/', (req, res, next) => {
    Event
      .create(req.body)
      .then(event => res.send(event))
      .catch(next);
  })

//tested
  .get('/', (req, res, next) => {
    Event
      .find()
      .select({ name: true })
      .then(events => res.send(events))
      .catch(next);
  })

//tested
  .get('/:id', (req, res, next) => {
    Event
      .findById(req.params.id)
      .then(event => res.send(event))
      .catch(next);
  })

//tested
  .patch('/:id', (req, res, next) => {
    Event
      .findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(event => res.send(event))
      .catch(next);
  })

//tested
  .delete('/:id', (req, res, next) => {
    Event
      .findByIdAndDelete(req.params.id)
      .then(event => res.send(event))
      .catch(next);
  });