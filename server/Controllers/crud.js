
const Item = require("../Model/items")


// Create an item // 
exports.create = async (req, res) => {
  try {
    const newItem = new Item(req.body);
    await newItem.save();
    res.status(201).json({ message: "The item has been added" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

//read all the items//

exports.read = async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error })
  }
}

//Update an specific item// 


exports.update = async (req, res) => {
  try { 
    const item = await Item.findByIdAndUpdate(req.params.id, req.body,{
      new: true,   
    });
    res.json(item );
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

//delete//

exports.remove = async (req,res) => {

  try{
    await Item.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
  












