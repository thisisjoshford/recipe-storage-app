const { Router } = require('express');
const Recipe = require('../models/Recipe.js');

module.exports = Router()
  .post('/', (req, res) => {
    Recipe
      .create(req.body)
      .then(recipe => res.send(recipe));
  })

//tested
  .get('/', (req, res) => {
    Recipe
      .find()
      .select({ name: true })
      .then(recipes => res.send(recipes));
  })

//tested
  .get('/:id', (req, res) => {
    Recipe
      .findById(req.params.id)
      .then(recipe => res.send(recipe));
  })

//tested
  .patch('/:id', (req, res) => {
    Recipe
      .findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(recipe => res.send(recipe));
  })

//tested
  .delete('/:id', (req, res) => {
    Recipe
      .findByIdAndDelete(req.params.id)
      .then(recipe => res.send(recipe));
  });
