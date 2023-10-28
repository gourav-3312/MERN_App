const mongoose = require("mongoose");

const DB = process.env.DATABASE;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
    // useFindAndModify: false
  })
  .then(() => {
    console.log("Connected to Mongo (conn.js)");
  })
  .catch((err) => console.log("Error connecting (conn.js)"));

// const mongoose = require("mongoose");

// const DB = 'mongodb+srv://cj:Shurav2807@cluster0.fu21r7s.mongodb.net/mernstack?retryWrites=true&w=majority&appName=AtlasApp';

// const connectToDatabase = async () => {
//   try {
//     await mongoose.connect(DB, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("Connected to MongoDB");
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//   }
// };

// module.exports = {
//   connectToDatabase,
//   mongoose, // Optionally, you can export the mongoose object for models
// };
