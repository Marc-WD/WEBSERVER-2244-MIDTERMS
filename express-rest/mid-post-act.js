const express = require('express');
const app = express();

app.use(express.json());

// Array for movies
const movies = [
    { id: 1, title: 'Superman' },
    { id: 2, title: 'Thor' },
    { id: 3, title: 'Iron Man' }
];

// --- GET all movies ---
app.get('/api/movies', (req, res) => {
    res.send(movies);
});

// --- GET movie by ID ---
app.get('/api/movies/:id', (req, res) => {
    const movie = movies.find(m => m.id === parseInt(req.params.id));
    if (!movie) return res.status(404).send('The movie with the given ID was not found.');
    res.send(movie);
});

// --- POST add a new movie ---
app.post('/api/movies', (req, res) => {
    const movie = {
        id: movies.length + 1,
        title: req.body.title
    };
    movies.push(movie);
    res.send(movie);
});

// Server
app.listen(4000, () => console.log('Listening on port 4000...'));
