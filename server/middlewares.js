const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const applyMiddlewares = server => {
  server.use(cors());
  server.use(morgan('tiny'));
  server.use(express.json());
};

module.exports = applyMiddlewares;
