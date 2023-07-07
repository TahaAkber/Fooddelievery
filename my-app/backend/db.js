const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://Kolnice:124890@cluster0.pdtge0u.mongodb.net/gofoodmern?retryWrites=true&w=majority";
const mongoDB = async () => {
  try {
    const connect = await mongoose.connect(mongoURI);

    if (connect) {
      console.log("Connection Successful");
      const fetched_data = await mongoose.connection.db.collection(
        "food_items"
      );
      fetched_data.find().toArray(function (err, result) {
        if (err) console.log(err);
        else {
          global.food_items = result;
        }
      });
    }
  } catch (error) {
    console.log("Error while connecting", error.message);
  }
};

module.exports = mongoDB;
