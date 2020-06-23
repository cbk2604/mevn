require('dotenv').config();

const express = require('express');
const server = express();
const mongoose = require('mongoose');
mongoose.connect(process.env.ATLAS_URI, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log("Connected to Database!"));

const cors = require('cors');
server.use(express.json());
server.use(cors());

const router = require('./characters')
server.use('/characters', router);

server.listen(3000, () => console.log("Server started!"));