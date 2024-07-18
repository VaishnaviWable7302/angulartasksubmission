const { Pool } = require('pg');
require('dotenv').config();

const mongoose = require('mongoose'); // Example module


const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

module.exports = pool;