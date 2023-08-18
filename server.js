const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan")
app.use(cors());
app.use(morgan('common'));
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