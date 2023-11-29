
//Register controller
const User = require("../Model/userModel")


exports.register = async (req, res, next) => {
    const { name, password, email } = req.body
    if (password.length < 6) {
      return res.status(400).json({ message: "Password less than 6 characters" })
    }
    try {
      await User.create({ 
        name,
        password, 
        email, 
      }).then(User =>
        res.status(200).json({
          message: "User successfully created",
          User,
        })
      )
    } catch (err) {
      res.status(401).json({
        message: "User not successful created",
        // error: error.mesage,
      })
    }
  }; 


  exports.login = async (req, res, next) => {
    const { email, password } = req.body
    // Check if username and password is provided
    if (!email || !password) {
      return res.status(400).json({
        message: "email or Password not present",
      })
    }




    try {
      const email = await User.findOne({ email : req.body.email })
      if (!email) {
        res.status(401).json({

          message: "Login not successful",
          error: "User not found",
        })
      } else {
        res.status(200).json({
          message: "Login successful",
          User,
        })
      }
    } catch (error) {
      res.status(400).json({
        message: "An error occurred",
        error: error.message,
      })
    }
  }






 
