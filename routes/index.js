// Imports required module
const express = require("express");

// Imports the modular route
const notesRouter = require("./notes.js");

// Shorthand for calling express
const app = express();

// Router middleware to use route for /notes
app.use("/notes", notesRouter);

// Exports router middleware
module.exports = app;
