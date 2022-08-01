const { Router } = require('express');
const Character = require ('../models/Character');

module.exports = Router();
.get('/:id', async (req, res) => {
    const getCharacter = await Character.getById(req.params.id);
    res.json(getCharacter);
})

.get('/', async (req, res) => {
    const Characters = await Character.getAll();
    res.json(Characters);
})


