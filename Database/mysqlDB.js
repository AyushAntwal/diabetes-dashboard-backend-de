const mysql = require("mysql");
const env = require("dotenv").config("../.env")

function connectToDB() {
  const connection = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS,
    port: process.env.DATABASE_PORT,
    database: process.env.DATABASE_DB,
  });
  console.log(process.env.DATABASE_HOST);
  connection.connect(function (err) {
    if (err) {

      console.error("error connecting: " + err);
      return;
    }
    console.log("DataBase Connected :", connection.config.database);
  });

  return connection;
}
const DBMoldel = connectToDB();

module.exports = {
  DBMoldel
};