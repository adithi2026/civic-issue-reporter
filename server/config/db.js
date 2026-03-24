const mongoose = require("mongoose");
require("dotenv").config();
const uri = process.env.MONGO_URI || "mongodb+srv://kanchana:kanchana`123@cluster0.yv3dimg.mongodb.net/";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;