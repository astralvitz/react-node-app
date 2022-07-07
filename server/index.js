const path = require('path');
const express = require("express");

require('dotenv').config();

const PORT = process.env.PORT || 3001;

const app = express();

const {Pool} = require('pg');
const pool = new Pool({
    connectionString: process.env.PG_DEV_CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
});

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
})

// this doesn't work b/c query takes time... not the proper way to do db calls via api
app.get("/api/users", (req, res) => {
  let response = "";
  pool.query(`SELECT * FROM Users;`, (err, res) => {
    if (err) {
      response = "Error - Failed to select all from Users"
      console.log(response);
      console.log(err);
    }
    else {
      response = res.rows;
      console.log(res.rows);
    }
  });
  res.json({ message: response });
})

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});