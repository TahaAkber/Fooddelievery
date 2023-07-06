const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://Kolnice:124890@cluster0.pdtge0u.mongodb.net/?retryWrites=true&w=majority";
const mongoDB = async () => {
  try {
    const connect = await mongoose.connect(mongoURI);

    if (connect) {
      console.log("Connection Successful");
    }
  } catch (error) {
    console.log("Error while connecting", error.message);
  }
};

module.exports = mongoDB;
