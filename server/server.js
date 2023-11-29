const express = require('express'); 


const connectDB = require("./Database/db");

//Connecting the Database
connectDB();


const app = express();

const PORT = process.env.PORT || 7000;

app.use(express.json())

app.use("/api", require("./routes/user"));
app.use("/api", require("./routes/crud"))



app.get('/', (req, res) => {
    res.json({ msg: "The Server is working"});
  });

app.listen(PORT, () => {
    console.log(`Server is UP on PORT: ${PORT}`);
  });
  