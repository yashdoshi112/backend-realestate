// knexfile.js
require('dotenv').config();

module.exports = {
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: 'backend/migrations'
    },
    ssl: { rejectUnauthorized: false }
  },
  // ...other environments if needed
};
