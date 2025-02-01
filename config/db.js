// backend/config/db.js
const { Pool } = require('pg');

// Configure these settings with your local or cloud PostgreSQL credentials
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'yash_doshi01',
  port: process.env.PORT || 5000,
  connectionString: process.env.DATABASE_URL,
  ssl: {
    require: true,                // Ensure SSL is used
    rejectUnauthorized: false     // Disable strict certificate validation
  }
});

module.exports = pool;
