const express = require('express');
const app = express();

// Array for GET Method
const movies = [
    { id: 1, title: 'Superman' },
    { id: 2, title: 'Thor' },
    { id: 3, title: 'Iron Man' }
];

// Get all movies
app.get('/api/movies', (req, res) => {
    res.send(movies);
});

// Get movie by ID
app.get('/api/movies/:id', (req, res) => {
    const movie = movies.find(h => h.id === parseInt(req.params.id));
    if (!movie) return res.status(404).send('The movie with the given ID was not found.');
    res.send(movie);
});

// Server listen on port 4000
app.listen(4000, () => console.log('Listening on port 4000...'));
