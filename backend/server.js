const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const userApiRoute = require('./routes/userApi')
const secretRoute = require('./routes/secret')
const initializeDbConnection = require('./db/connector')
const { AppSettings } = require('./configs') 
const cookieParser = require('cookie-parser');

const app = express();
app.use(cors());

initializeDbConnection();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(logger("dev"));

app.use("/userapi", userApiRoute);
app.use("/secret", secretRoute);


app.listen(AppSettings.Port, () => console.log(`LISTENING ON PORT ${AppSettings.Port}`));