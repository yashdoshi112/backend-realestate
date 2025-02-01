// knexfile.js

require('dotenv').config();

module.exports = {
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './migrations'
    },
    ssl: { rejectUnauthorized: false }
  },
  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL || 'postgres://postgres:yash_doshi01@localhost:5432/postgres',
    migrations: {
      directory: './migrations'
    }
  }
};
