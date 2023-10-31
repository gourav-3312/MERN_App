const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
const cookieparser = require("cookie-parser");
const authenticate = require("../middleware/authenticate");

require("../db/conn");
const User = require("../model/userSchema");

// const DB = process.env.DATABASE;

// mongoose
//   .connect(DB, {
//     useNewUrlParser: true,
//     // useCreateIndex: true,
//     useUnifiedTopology: true,
//     // useFindAndModify: false
//   })
//   .then(() => {
//     console.log("Connected to Mongo (auth.js)");
//   })
//   .catch((err) =>
//     console.log("Error connecting (auth.js)"));

router.use(cookieparser());

router.get("/", (req, res) => {
  res.send("Hello from router.js server");
});

// Using Promises
// router.post("/register", (req, res) => {
//   const { name, email, phone, password, cpassword } = req.body;

//   if (!name || !email || !phone || !password || !cpassword) {
//     return res.status(422).json({ error: "Please fill your details properly" });
//   }

//   // Validation
//   User.findOne({ email: email })
//     .then((userExist) => {
//       if (userExist) {
//         return res.status(422).json({ error: "Email Already Exists" });
//       }

//       const user = new User({ name, email, phone, password, cpassword });

//       // Save the user and handle the promise
//       user
//         .save()
//         .then(() => {
//           res
//             .status(201)
//             .json({ message: "The User Has Been Successfully Registered" });
//         })
//         .catch((err) => {
//           // Handle any error that occurs during user save
//           res.status(500).json({ error: "An error has occurred" });
//         });
//     })
//     .catch((err) => {
//       // Handle any error that occurs during user lookup
//       console.log(err);
//       res.status(500).json({ error: "An error has occurred" });
//     });
// });

// Async-Await
router.post("/register", async (req, res) => {
  const { name, email, phone, password, cpassword } = req.body;

  if (!name || !email || !phone || !password || !cpassword) {
    return res.status(422).json({ error: "Please fill your details properly" });
  }

  try {
    // Validation
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({ error: "Email Already Exists" });
    } else if (password != cpassword) {
      return res.status(422).json({ error: "Password not matched" });
    } else {
      const user = new User({ name, email, phone, password, cpassword });

      await user.save();
      res
        .status(201)
        .json({ message: "The User Has Been Successfully Registered" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "An error has occurred" });
  }
});

// login route
router.post("/signin", async (req, res) => {
  // console.log(req.body);
  try {
    let token;
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Fill your data properly" });
    }

    const userLogin = await User.findOne({ email: email });

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);

      token = await userLogin.generateAuthToken();
      const encodedToken = JSON.stringify(token);

      // res.cookie("jwtoken", encodedToken, {
      //   expires: new Date(Date.now() + 604800000),
      //   httpOnly: false,
      // });

      res.cookie("jwtoken", encodedToken, {
        expires: new Date(Date.now() + 604800000),
        httpOnly: true,
      });

      // Method to store cookie in browser (removable)
      // res.send("jwtoken");

      if (!isMatch) {
        res.status(400).json({ error: "Error Login" });
      } else {
        res.json({ message: "User Successfully Login" });
      }
    } else {
      res.status(400).json({ error: "Invalid Credentials" });
    }
  } catch (err) {
    console.log(err);
  }
});

// about us
router.get("/about", authenticate, (req, res) => {
  console.log("ABOUT");
  res.send(req.rootUser);
});

router.get("/getdata", authenticate, (req, res) => {
  console.log("ABOUT");
  res.send(req.rootUser);
});

router.post("/contact", authenticate, async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
      return res.json({ error: "Please fill the form" });
    }

    const userContact = await User.findOne({ _id: req.userID });

    if (userContact) {
      const userMessage = await userContact.addMessage(
        name,
        email,
        phone,
        message
      );
      await userContact.save();
      res.status(201).json({ message: "User successfully contacted" });
    }
  } catch (error) {
    console.log(error);
  }
});

router.get("/logout", (req, res) => {
  console.log("LOGOUT");
  res.clearCookie("jwtoken", { path: "/" });
  res.status(200).send("User Logout");
});

module.exports = router;
