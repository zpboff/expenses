const mongoose = require('mongoose');
const dbRoute = "mongodb://localhost:27017/expenses";

function initializeDbConnection() {
   mongoose.connect(
      dbRoute,
      { useNewUrlParser: true }
   );
   
   let db = mongoose.connection;
   db.once("open", () => console.log("connected to the database"));
   db.on("error", console.error.bind(console, "MongoDB connection error:"));
}

module.exports = initializeDbConnection