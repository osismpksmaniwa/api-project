const functions = require('firebase-functions');
const express = require('express');
const app = require(express);

app.get('/api', (req, res) => {
    res.sendFile('views/api-list.html', {root:__dirame})
});

app.get('/linkshortner', (req, res) => {
    res.sendFile('views/linkshort.html', {root:__dirname})
});

exports.app = functions.https.onRequest(app);