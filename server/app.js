const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cookieparser = require("cookie-parser");
// const { connectToDatabase } = require("./db/conn"); // Import the database connection function

// require('dotenv').config({ path: './config.env' });
dotenv.config({ path: "./config.env" });

const PORT = process.env.PORT;

// DB Connection
// connectToDatabase();
require("./db/conn");

// const DB = process.env.DATABASE;

// mongoose
//   .connect(DB, {
//     useNewUrlParser: true,
//     // useCreateIndex: true,
//     useUnifiedTopology: true,
//     // useFindAndModify: false
//   })
//   .then(() => {
//     console.log("Connected to Mongo (app.js)");
//   })
//   .catch((err) =>
//     console.log("Error connecting (app.js)"));
//

app.use(express.json());
app.use(cookieparser());

// linking the router files to make our route
app.use(require("./router/auth"));

// Middleware
// const middleware = (req, res, next) => {
//   console.log("CJ");
//   next();
// };

app.get("/", (req, res) => {
  res.send("Kya Re Dogesh");
});

// app.get("/about", (req, res) => {
//   res.send("Dogesh");
// });

// app.get("/contact", (req, res) => {
//   res.send("Kya Re");
// });

app.get("/signin", (req, res) => {
  res.send("Kya Re");
});

app.get("/signup", (req, res) => {
  res.send("Kya Re");
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
