const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
require("./MongoDB/db");

var bodyParser = require("body-parser");
const mainRoute = require("./Routes/main");
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

app.use("/", mainRoute);

app.listen(2100, () => {
  console.log("Server Is running on ", 2100);
});