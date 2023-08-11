const mongoose = require("mongoose");

const stateSchema = new mongoose.Schema(
  {
    Level1: { type: String },
    Level2: { type: String },
    Level3: { type: String },
    Level4: { type: String },
    Level5: { type: String },
  },
  { strict: false }
);

const stateList = mongoose.model("stateList", stateSchema);

module.exports = { stateList };
