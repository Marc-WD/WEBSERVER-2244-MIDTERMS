var express = require('express');
var app = express();

app.use(express.static(__dirname));

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// Serve your main form
app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

// Serve success page
app.get('/success.html', function (req, res) {
    res.sendFile(__dirname + "/success.html");
});

// POST handler – log the data and redirect to success page
app.post('/process_post', urlencodedParser, function (req, res) {
    console.log(req.body); // Logs the form data in the terminal

    const params = new URLSearchParams(req.body).toString();
    res.redirect('/success.html?' + params);
});

// Start server
app.listen(3000, () => {
    console.log("Server running at http://127.0.0.1:3000/");
});
