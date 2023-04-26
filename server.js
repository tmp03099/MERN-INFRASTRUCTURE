require("dotenv").config();
require("./config/db");
const express = require("express");
const path = require("path"); //node module
const favicon = require("serve-favicon");
const logger = require("morgan");
const ensureLoggedIn = require("./config/ensureLoggedIn");

const app = express();
// development port 3001
// in production we'll a PORT number set in the eviroment variables
const PORT = process.env.PORT || 3001;

//!Config
//logger middleware
app.use(logger("dev"));
//Json payload middleware (for data coming from frontend functions)
app.use(express.json());
//Configure both server-favicon & static middleware
// to server from the production 'build' foler
app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
app.use(express.static(path.join(__dirname, "build")));
// checks if token was sent and sets a user data on the req (req.user)
app.use(require("./config/checkToken"));

//! All other routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/items", ensureLoggedIn, require("./routes/api/items"));
app.use("/api/orders", ensureLoggedIn, require("./routes/api/orders"));

// Put API routes here, before the "catch all" route

// The following "catch all" route (note the *) is nessesary
// to return the index.html on all non-AJAX requests
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html")); //"catch all" route defined to send index.html to build
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
