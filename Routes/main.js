const express = require("express");
// const { DBMoldel } = require("../Database/mysqlDB");
const { stateList } = require("../MongoDB/model");

const mainRoute = express.Router();
mainRoute.get("/", (req, res) => {
  res.send("Server is running");
});
mainRoute.post("/", (req, res) => {
  const { Level1, Level2, Level3, Level4, Level5 } = req.body;
  stateList
    .find({ Level1, Level2, Level3, Level4, Level5 })
    .then((data) => {
      res.json({ result: data });
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({ message: "Internal server error" });
    });
  // DBMoldel.query(
  //   `select * from state_comparison where
  //   Level1 = '${Level1}' and
  //   Level2 = '${Level2}' and
  //   Level3 = '${Level3}' and
  //   Level4 = '${Level4}' and
  //   Level5 = '${Level5}' `,
  //   (err, result, fields) => {
  //     if (err) {
  //       console.log(err);
  //       return res.status(500).json({ message: "Internal server error" });
  //     }
  //     res.json({ result });
  //   }
  // );
});

module.exports = mainRoute;
