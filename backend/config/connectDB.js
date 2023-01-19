const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(
      "mongodb+srv://wiwi:wi123@cluster0.m8qqh2b.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("db is connected");
  } catch (error) {
    console.log("db is not connected");
  }
};
module.exports = connectDB;
