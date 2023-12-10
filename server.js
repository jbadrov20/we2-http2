const express = require('express');
const fs = require('fs');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public', { 'extensions': ['html'] }));
app.use(express.static('.well-known', { 'extensions': ['txt', 'json'] }));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server sluša na portu ${port}`);
});