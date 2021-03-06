// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var routes = require("./controllers/burgers_controller");

// Setup the Express App
var app = express();
var PORT = process.env.PORT || 8080;

// Setup the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Setup Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Setup access to static assets
app.use(express.static('public'))

// Setup Routes
app.use(routes);

// Start server to listen to client requests.
app.listen(PORT, function() {
  // Log (server-side) when the server has started
  console.log("Server listening on: http://localhost:" + PORT);
});