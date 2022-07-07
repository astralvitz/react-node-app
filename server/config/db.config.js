const dotenv = require('dotenv').config();

const { DB_HOST, DB_USER, DB_PW, DB_CONN } = process.env;

module.exports = {
    "username": DB_USER,
    "password": DB_PW,
    "database": "database_development",
    "host": DB_HOST,
    "dialect": "postgres",
    "db_conn": DB_CONN
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