"use strict";

const express = require("express");
const app = express();
const cors = require("cors");
const questionRoutes = require("./questions.api");
const scoresRoutes = require("./scores.api");

app.use(cors());
app.use(express.json());
app.use("/", questionRoutes);
app.use("/", scoresRoutes);

const port = 4000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
