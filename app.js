const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'router.html'));
});

// Adding routes for borrower, guarantee, and lender
app.get('/borrower', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'borrower.html'));
});

app.get('/guarantee', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'guarantee.html'));
});

app.get('/lender', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'lender.html'));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    console.log(`Example app running on http://localhost:${port}/`);
});
