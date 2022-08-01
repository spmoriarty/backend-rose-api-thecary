const pool = require('../utils/pool');
const { Quote } = require('./Quote');

class Character {
  id;
  first_name;
  last_name;
  quotes;

  constructor(row) {
    this.id = row.id;
    this.first_name = row.first_name;
    this.last_name = row.last_name;
    this.quotes =
      row.quotes.length > 0 ? row.quotes.map((quote) => new Quote(quote)) : [];
  }

  static async getAll() {
    const { rows } = await pool.query(`
   SELECT characters.id, characters.first_name, characters.last_name, quotes.id, quotes.character_id, quotes.detail
FROM characters
LEFT JOIN quotes
on characters.id = quotes.character_id`);
    return rows.map((row) => new Character(row));
  }
}

module.exports = Character;
