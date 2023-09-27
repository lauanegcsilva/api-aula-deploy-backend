const knex = require("knex")({
  client: "pg",
  connection: {
    host: process.env.DB_HOST,
    port: process.env.PORT,
    user: process.env.USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  },
  ssl: { rekjectUnauthorizad: false },
});

module.exports = knex;
