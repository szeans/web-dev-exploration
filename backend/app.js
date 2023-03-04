// import modules
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const axios = require('axios');
require("dotenv").config();

// app
const app = express();

// db

// middleware
app.use(morgan("dev"));
app.use(cors({ origin: true, credentials: true}));

// routes
const exampleRoutes = require('./routes/example');
app.use('/', exampleRoutes);

//port
const port = process.env.PORT || 8000;

// listener
const server = app.listen(port, () => console.log('Server running on port ' + port));
