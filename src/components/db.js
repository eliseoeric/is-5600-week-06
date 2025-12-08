const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/fullstack_prints", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log(" MongoDB connected successfully");
});

mongoose.connection.on("error", (err) => {
  console.error("❌ MongoDB connection error:", err);
});

module.exports = mongoose;
