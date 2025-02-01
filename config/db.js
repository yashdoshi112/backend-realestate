// backend/config/db.js
const { Pool } = require('pg');

// Configure these settings with your local or cloud PostgreSQL credentials
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'yash_doshi01',
  port: 5432,
  connectionString: process.env.DATABASE_URL || 'postgres://ubgashlj4v1c63:pbeb17504ba6e7f0715e6a16e2cf6e73ed67c6883eb8c9a8fec90fc01aede6fd0@c5p86clmevrg5s.cluster-czrs8kj4isg7.us-east-1.rds.amazonaws.com:5432/d2s966es8qreve'
});

module.exports = pool;
