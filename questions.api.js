const express = require("express");
const questionRoutes = express.Router();
const pool = require("./connection");

questionRoutes.get("/questions", (req, res) => {
  pool
    .query("select * from questions order by random() limit 10")
    .then(result => {
      res.send(result.rows);
    });
});

module.exports = questionRoutes;
