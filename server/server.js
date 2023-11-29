const express = require('express'); 


const connectDB = require("./Database/db");

//Connecting the Database
connectDB();


const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json())

app.use("api/userCtrl", require("./routes/user"))

app.use("/api/users", require("./routes/user"));

app.get('/', (req, res) => {
    res.json({ msg: "The Server is working"});
  });

app.listen(PORT, () => {
    console.log(`Server is UP on PORT: ${PORT}`);
  });
  