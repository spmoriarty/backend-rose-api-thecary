const { Router } = require('express');
const  { Character } = require ('../models/Character');

module.exports = Router()
  .get('/', async (req, res) => {
    const Characters = await Character.getAll();
    res.json(Characters);
  });


