const path = require('path');
const express = require("express");

const bodyParser = require("body-parser");
const cors = require("cors");

require('dotenv').config();

const PORT = process.env.PORT || 3001;

const app = express();

var corsOptions = {
  origin: "http://localhost:3001"
};
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

//db
const db = require('./models');
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "simple route" });
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
})

// tutorial routes
require("./routes/tutorial.routes")(app);

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});