const express = require('express');
const app = express();

// Homepage route
app.get('/', (req, res) => {
    res.send('My New App!');
});

// Return all heroes (simple array version)
app.get('/api/heroes', (req, res) => {
    res.send(['Superman', 'Iron Man', 'Batman', 'Hulk']);
});

// --- Single param example ---
app.get('/api/heroes/:id', (req, res) => {
    res.send(req.params.id);
});

// --- Multi params example ---
app.get('/api/heroes/:title/:publisher', (req, res) => {
    res.send(req.params);
});

// --- Multi params + query params example ---
app.get('/api/heroes/:title/:publisher/query', (req, res) => {
    res.send([req.params, req.query]);
});

app.listen(3000, () => console.log('Listening on port 3000'));
