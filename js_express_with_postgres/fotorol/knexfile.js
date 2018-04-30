// Update with your config settings.

module.exports = {
  development: {
    client: "pg",
    connection: {
      database: "fotorol_dev"
      // For linux users, you must set a username and password.
      // To change your user password, use psql:
      // & psql
      // sg=# ALTER USER username PASSWORD 'supersecret';
      // username: "sg",
      // password: "supersecret"
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
