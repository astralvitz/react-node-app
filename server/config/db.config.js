require('dotenv').config();

const { DB_HOST, DB_USER, DB_PW, PG_DEV_CONNECTION_STRING } = process.env;

module.exports = {
    "username": DB_USER,
    "password": DB_PW,
    "database": "database_development",
    "host": DB_HOST,
    "dialect": "postgres",
    "heroku_connection_string": PG_DEV_CONNECTION_STRING
    // "development": {
    //     "username": DB_USER,
    //     "password": DB_PW,
    //     "database": "database_development",
    //     "host": DB_HOST,
    //     "dialect": "postgres",
    // },
    // "test": {
    //     "username": DB_USER,
    //     "password": DB_PW,
    //     "database": "database_test",
    //     "host": DB_HOST,
    //     "dialect": "postgres",
    // },
    // "production": {
    //     "username": DB_USER,
    //     "password": DB_PW,
    //     "database": "database_production",
    //     "host": DB_HOST,
    //     "dialect": "postgres",
    // }
}