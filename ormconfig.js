require('dotenv/config');

module.exports = {
   type: 'postgres',
   url: process.env.DATABASE_URL,
   logging: false,
   entities: ['dist/Core/database/entities/*.js'],
   migrations: ['dist/Core/database/migrations/*.js'],
   cli: {
      entitiesDir: 'src/Core/database/entities',
      migrationsDir: 'src/Core/database/migrations',
   },
   synchronize: false,
   extra: {
      ssl: {
         rejectUnauthorized: false,
      },
   },
};
