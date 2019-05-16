const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const apiRouter = require('./api/api')
const initializeDbConnection = require('./db/connector')

const PORT = 3001;
const app = express();
app.use(cors());

initializeDbConnection();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

app.use("/api", apiRouter);

app.listen(PORT, () => console.log(`LISTENING ON PORT ${PORT}`));