const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/' + 'index_GET.html');
});

app.get('/process_get', function (req, res) {
    let response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
});

app.listen(3000, () => {
    console.log('Server running at http://127.0.0.1:3000/');
});
