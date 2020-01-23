// Required modules
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const routes = require("./routes");

// Setup Express app
const app = express();
const PORT = process.env.PORT || 3001;

// Configure middleware
app.use(logger("dev"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
// Serve up static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Routes
app.use(routes);

// Mongo DB connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");

// Start API server
app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});