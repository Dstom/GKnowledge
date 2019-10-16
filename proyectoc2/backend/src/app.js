const express = require('express');
const cors = require('cors'); 
const app = express();


// import express from 'express';

// settings
app.set('port', process.env.PORT || 4000);

// middlewares., funciones antes de que llegen a las rutas
app.use(cors());
app.use(express.json());



// routes
//app.get
app.use('/api/lessons', require('./routes/lessons'));
app.use('/api/users', require('./routes/users'))
//app.use('/api/notes', require('./routes/notes'));

module.exports = app;