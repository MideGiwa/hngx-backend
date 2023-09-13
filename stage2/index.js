const express = require('express');
const app = express();
const path = require('path');
const cors = require("cors");
require("dotenv").config();
require("./config/database").connect();
const router = require('./routes/personRoutes');

const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");

app.use(cors());
app.use(express.json());
app.use("/api", router);

app.get("/", (req, res) => {
    const documentationLink = "<a href='/documentation'>Click here to view the documentation</a>";
    const responseHTML = `<h1>Hngx Backend Stage 2 Task</h1><p>For more information, ${documentationLink}</p>`;
    
    return res.send(responseHTML);
  });
  

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 5000;

app.listen(port);

console.log('App is listening on port ' + port);

