const express = require("express");
const router = express.Router();
const user = require("../model/user");
var bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");




router.post("/register", async (req, res, next) => {
  const { name, email, mobile, password } = req.body;
  const userExsist = await user.findOne({ mobile: mobile });
  const hashPassword = await bcrypt.hash(password, 10);
  if (userExsist) {
    res.send("User alredy exsit..");
  } else {
    const userCreate = await user.create({ name, email, mobile, hashPassword });
    if (userCreate) {
      res.status(200);
      res.json({
        _id: userCreate._id,
        name: userCreate.name,
        email: userCreate.email,
        mobile: userCreate.mobile,
        password: hashPassword,
      });
    }
  }

});

router.post("/login", async (req, res, next) => {
  const { mobile, password } = req.body;
  const userdetail = await user.findOne({ mobile: mobile });
  if (userdetail) {
  //   await bcrypt
  //     .compare(password, userdetail.password)
  //     .then((result) => {
  //       if (result) {
  //         const token = jwt.sign({ _id: userdetail._id }, "secret");
  //         res.send({ token: token });
          
        
  //       } else {
  //         res.send(null);
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // } else {
  //   res.status(404);
  //   console.log("Hi");
  // }

  
  }
  
});

module.exports = router;


// res.status(200);
//           res.json({
//             _id: userdetail._id,
//             mobile: userdetail.mobile,
//           });