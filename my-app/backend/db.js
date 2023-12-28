const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://Tahaakber:lumia123@cluster0.clsuk9h.mongodb.net/gofoodmern?retryWrites=true&w=majority";
const mongoDB = async () => {
  try {
    const connect = await mongoose.connect(mongoURI);

    if (connect) {
      console.log("Connection Successful");
      const fetched_data = mongoose.connection.db.collection("food_items");
      const data = await fetched_data.find({}).toArray();
      const foodCategory = mongoose.connection.db.collection("food_Category");
      const catdata = await foodCategory.find({}).toArray();
      global.food_items = data;
      global.food_Category = catdata;
    }
  } catch (error) {
    console.log("Error while connecting", error.message);
  }
};

module.exports = mongoDB;
