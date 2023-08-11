const mongoose = require("mongoose");
const uri =
  "mongodb+srv://Ayu_DB:AyushAntiwal@daibetes.dxw1ygc.mongodb.net?retryWrites=true&w=majority";
(async () => {
  try {
    await mongoose.connect(uri).then(() => {
      console.log("Database Connected");
    });
  } catch (error) {
    console.log(error);
    console.log("Database fail to connecet");
  }
})();
