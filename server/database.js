// const Sequelize = require('sequelize');
// // heroku local (not working b/c no database found)
// // const sequelize = new Sequelize(process.env.pg_local_database, process.env.pg_local_user, process.env.pg_local_pw, {
// //   host: process.env.pg_local_host,
// //   dialect: 'postgres'
// // })

// //heroku dev
// const sequelize = new Sequelize(process.env.PG_DEV_CONNECTION_STRING, {
//   dialect: 'postgres',
//   dialectOptions: {
//     ssl: {
//       require: true,
//       rejectUnauthorized: false
//     }
//   }
// });

// sequelize
// .authenticate()
// .then(() => {
// console.log('Connection has been established successfully.');
// })
// .catch(err => {
// console.error('Unable to connect to the database:', err);
// });