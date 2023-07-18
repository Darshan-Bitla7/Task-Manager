const mongoose = require("mongoose");
// BLBSoHpyDuYhhHLU

const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true, //to avoid deprecation warnings in the console , not needed for v6 onwards tho
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });
};

module.exports = connectDB;
