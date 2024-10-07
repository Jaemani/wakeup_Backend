require('dotenv').config();
const express = require('express');
const cors = require("cors");
const app = express();

app.use(express.json());
// cors provides Express middleware to enable CORS
app.use(cors(corsOptions));

const db = require("./models");

