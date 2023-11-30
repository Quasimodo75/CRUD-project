
const Item = require("../Model/items")


// Create an item // 
exports.create = async (req, res) => {
    try {
      const newItem = new Item(req.body);
      await newItem.save();
      res.status(201).json({message:"The item has been added"});
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
}

//read a specific item//

exports.read = async (req, res) => {
  try{
    const items = await Item.find();
    res.json(items); 
  } catch (error){ 
    res.status(500).json({error: error})
  }
}




