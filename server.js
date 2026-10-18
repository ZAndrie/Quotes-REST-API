import express from 'express';

const app = express();
app.use(express.json());

let quotes = [
  { id: 1, text: 'Stay hungry, stay foolish.', author: 'Steve Jobs' },
  { id: 2, text: 'Simplicity is the ultimate sophistication.', author: 'Leonardo da Vinci' },
  { id: 3, text: 'Talk is cheap. Show me the code.', author: 'Linus Torvalds' },
  { id: 4, text: 'The best way to predict the future is to invent it.', author: 'Alan Kay' }
];

// GET all
app.get('/quotes', (req, res) => {
  res.json(quotes);
});

// GET one
app.get('/quotes/:id', (req, res) => {
  const id = Number(req.params.id);
  const quote = quotes.find(q => q.id === id);

  if (!quote) {
    return res.status(404).json({ error: 'Quote not found' });
  }
  res.json(quote);
});

// POST
app.post('/quotes', (req, res) => {
  const { text, author } = req.body ?? {};

  if (!text || !author) {
    return res.status(400).json({ error: 'text and author are required' });
  }

  const newId = quotes.length ? Math.max(...quotes.map(q => q.id)) + 1 : 1;
  const newQuote = { id: newId, text, author };
  quotes.push(newQuote);

  res.status(201).json(newQuote);
});

// DELETE
app.delete('/quotes/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = quotes.findIndex(q => q.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Quote not found' });
  }

  quotes.splice(index, 1);
  res.status(204).send();
});

// 404 fallback (must be after all routes)
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.listen(3000, () => console.log('Server running on port 3000'));