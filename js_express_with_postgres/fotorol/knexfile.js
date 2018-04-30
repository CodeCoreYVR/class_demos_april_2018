// Update with your config settings.

module.exports = {
  development: {
    client: "pg",
    connection: {
      database: "fotorol_dev"
    },
    migrations: {
      tableName: "knex_migrations",
      // This property names the table will hold migration
      // state information.
      directory: "./db/migrations"
      // This property specifies which directory will hold
      // our migration files.
    }
  }
};
