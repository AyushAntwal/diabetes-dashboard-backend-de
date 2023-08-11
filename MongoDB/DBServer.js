// const { MongoClient, ServerApiVersion } = require("mongodb");
// const uri =
//   "mongodb+srv://Ayu_DB:AyushAntiwal@daibetes.dxw1ygc.mongodb.net/?retryWrites=true&w=majority";
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });
// async function MongoDB() {
//   try {
//     await client.connect();
//     const db = client.db("daibetes");
//     const statelist = db.collection("Statelist");
//     // await statelist.insertOne({ Name: "Ayush" });
//     const result = await statelist.findOne({ Name: "Ayush" });
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
