const { Router } = require('express');
const { Quote } = require('../models/Quote');

module.exports = Router()

  .get('/:id', async (req, res) => {
    const data = await Quote.getById(req.params.id);
    res.json(data);
  })


  .post('/', async (req, res) => {
    const quote = await Quote.insert(req.body);
    if (req.body.quote.Id) {
      await Promise.all(req.body.quoteIds.map((id) => quote.addQuoteById(id))); 
    }
    await res.json(quote);

  });
