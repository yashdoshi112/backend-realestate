// knexfile.js

require('dotenv').config();  // Load environment variables from .env

module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL || 'postgres://ubgashlj4v1c63:pbeb17504ba6e7f0715e6a16e2cf6e73ed67c6883eb8c9a8fec90fc01aede6fd0@c5p86clmevrg5s.cluster-czrs8kj4isg7.us-east-1.rds.amazonaws.com:5432/d2s966es8qreve',
    migrations: {
      directory: './migrations'  // Adjust this path if your migrations folder is elsewhere
    },
    // Optional: if needed for local SSL connection, you can add:
    // ssl: { rejectUnauthorized: false }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,  // Heroku sets this automatically when you provision Heroku Postgres
    migrations: {
      directory: './migrations'
    },
    ssl: { rejectUnauthorized: false }  // Required for many Heroku Postgres setups
  }
};
