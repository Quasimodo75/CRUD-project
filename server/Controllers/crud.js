
const Item = require("../Model/items")


// Create
exports.create = async (req, res) => {
    try {
      const newItem = new Item(req.body);
      await newItem.save();
      res.status(201).json({message:"The item has been added"});
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
}





