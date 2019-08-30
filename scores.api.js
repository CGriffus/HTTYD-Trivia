const express = require("express");
const scoresRoutes = express.Router();
const pool = require("./connection");

function getScores(req, res) {
  pool.query("select * from scores order by score").then(result => {
    res.send(result.rows);
  });
}

scoresRoutes.get("/scores", getScores);

scoresRoutes.post("/scores", (req, res) => {
  pool
    .query("insert into scores (username, score) values ($1::text, $2::int)", [
      req.body.username,
      req.body.score
    ])
    .then(() => {
      getScores(req, res);
    });
});

module.exports = scoresRoutes;
