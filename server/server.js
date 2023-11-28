const express = require('express'); 

const app = express();


const PORT = process.env.PORT || 5000;

app.use(express.json())



app.get('/', (req, res) => {
    res.json({ msg: "The Server is working"});
  });

app.listen(PORT, () => {
    console.log(`Server is UP on PORT: ${PORT}`);
  });
  