const mysql = require("mysql");

function connectToDB() {
  const connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "root",
    port: 3306,
    database: "daibetes",
  });
  connection.connect(function (err) {
    if (err) {
      console.error("error connecting: " + err);
      return;
    }
    console.log("DataBase Connected :", connection.config.database);
    //     console.log("connected as id " + connection.threadId);
  });

  return connection;
}
const DBMoldel = connectToDB();

module.exports = { DBMoldel };
