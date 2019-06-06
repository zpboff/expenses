const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const authApiRoute = require('./routes/authApi')
const expenseApiRoute = require('./routes/expenseApi')
const initializeDbConnection = require('./db/connector')
const { AppSettings } = require('./configs') 
const cookieParser = require('cookie-parser');
const passport = require('passport');

initializeDbConnection();

const app = express();
app.use(passport.initialize());
require('./passport')(passport);
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(logger("dev"));

app.use("/api/auth", authApiRoute);
app.use("/api/expense", expenseApiRoute);


app.listen(AppSettings.Port, () => console.log(`LISTENING ON PORT ${AppSettings.Port}`));