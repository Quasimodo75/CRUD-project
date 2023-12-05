const Item= require("../Model/items");

const itemController = {
    searchItems: async (req, res) => {
      try {
        const query = req.query.q; // Assuming the search query is provided as a query parameter
        const results = await Item.find({ name: { $regex: new RegExp(query, 'i') } });
  
        res.json(results);
      } catch (error) {
        console.error('Error searching items:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
    },
  };
  
  module.exports = itemController;
