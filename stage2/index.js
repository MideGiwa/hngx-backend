const express = require('express');
const app = express();
const path = require('path');
const cors = require("cors");
require("dotenv").config();
require("./config/database").connect();
const router = require('./routes/personRoutes');

const notFound = require("./middleware/notFound");

app.use(cors());
app.use(express.json());

app.use("/api", router);

app.use(notFound);

const port = process.env.PORT || 5000;

app.listen(port);

console.log('App is listening on port ' + port);

